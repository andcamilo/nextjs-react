import useAuth from "../hooks/useAuth";
import { Formik } from "formik";
import Image from 'next/image'
import {  useState } from "react";
import { AppContext } from "../context/context"
import { useEffect, useContext } from "react";

const LogOutButtom = () => {
    const { logout } = useAuth();

    const { userSession } = useContext(AppContext);
    useEffect(()=> {
     
    }, [userSession])
    
  
    return (
        <div>
        <Formik
          initialValues={{
            username: userSession
          }}
          onSubmit={logout}
          validateOnMount={false}
          validateOnChange={false}
          validateOnBlur={false}>
          {
            ({
  
              values,
              handleSubmit
            }) => (
              <div>
                  <form onSubmit={handleSubmit}>
                    <button type="submit">
                        <Image
                            src="/images/Logout.png"
                            alt="logout"
                            width={440}
                            height={500}
                        />
                    </button>
                  </form>    
              </div>
            )
          }
        </Formik>
      </div>
      
    )
}


export default LogOutButtom