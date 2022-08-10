import { useRouter } from "next/router";
import { AppContext } from "../context/context";
import { useEffect, useContext } from "react";

export default function useAuth(){

  const router = useRouter()
  const { setErrorMessage, setUserSession } = useContext(AppContext);
	const setErrors = (message) => {
      setErrorMessage(message)
	}
  const setUser = (message) => {
      setUserSession(message)
  }


  const login = (values, { setSubmitting }) => {
    setUser(values.username)
    
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(values)
    }).then(res => {
      if (!res.ok) throw res
      router.push({
        pathname: '/dashboards/dashboard'
      },
        "/dashboards/dashboard")
      
      return res.json()
    }).then(data => {


    }).catch(async err => {

      if(err.status === 404 ){
        router.push({
          pathname: '/error/4XX/404'
        },
          "/error/4XX/404")

      } else if(err.status === 505) {
        router.push({
          pathname: '/error/4XX/404'
        },
          "/error/4XX/404")

      }
      
      const responseData = await err.json()
      setErrors(responseData.message)
      if (responseData?.message?.includes("UserNotConfirmedException:")) {
        // Trigger confirmation code email
        await fetch('/api/confirm/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username: values.username })
        })
        await router.push({
            pathname: "/confirm",
            query: {username: values.username},
          },
          "/confirm")
      }
    }).finally(() => {
      setSubmitting(false)
    })
  }

  const logout = (values, { setSubmitting }) => {
    fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then(res => {
      if (!res.ok) throw res
      router.push({
        pathname: '/login'
      },
        "/login")
    }).catch(async err => {
      if(err.status === 400){
        router.push({
          pathname: '/error/4XX/404'
        },
          "/error/4XX/404")

      }
    }).finally(() => {
      setSubmitting(false)
    })
  }

  const resetPasswordRequest = (values, { setSubmitting }) => {
    fetch('/api/password/reset_code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then(res => {
      if (!res.ok) throw res
      router.push({
        pathname: '/password/reset',
        query: { username: values.username }
      },
        "/password/reset")
    }).catch(async err => {
      if(err.status === 400){
        router.push({
          pathname: '/error/4XX/404'
        },
          "/error/4XX/404")

      }
    }).finally(() => {
      setSubmitting(false)
    })
  }

  const resetPassword = (values, { setSubmitting }) => {
    fetch('/api/password/reset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then(res => {
      if (!res.ok) throw res
      router.push({
        pathname: '/login'
      },
        "/login")
    }).catch(err => {
      router.push({
        pathname: '/error/4XX/404'
      },
        "/error/4XX/404")
    }).finally(() => {
      setSubmitting(false)
    })
  }


  return {
    login,
    logout,
    resetPasswordRequest,
    resetPassword
  }
}