import { Formik } from "formik";
import useAuth from "../hooks/useAuth";
import useValidationSchema from "../hooks/useValidationSchema";
import { useRouter } from "next/router";
import HeaderAuth from "../components/header-auth";
import FooterAuth from "../components/footer-auth";
import Link from 'next/link'
import { AppContext } from "../context/context";
import { useEffect, useContext } from "react";

export default function Login() {

  const router = useRouter();
  const { success } = router.query;

  const { loginSchema } = useValidationSchema();
  const { errorMessage } = useContext(AppContext);
  const { login } = useAuth();


  return (
    <div>
      {
        success === "true" &&
        <div style={{
          paddingTop: "10px",
          paddingBottom: "10px",
          color: "green"
        }}>
          {'You\'re signed up!'}
        </div>
      }
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        validationSchema={loginSchema}
        onSubmit={login}
        validateOnMount={false}
        validateOnChange={false}
        validateOnBlur={false}>
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (

          <div>
            <HeaderAuth title={"Log in to your dashboard"} />
            <div className="bg-[#FAF9F5] justify-center pt-[80px] flex h-809">
              <form onSubmit={handleSubmit} className=" rounded px-8 pt-2 pb-8 mb-4">
                <div className=" mb-4 pb-[200px] ">
                  <div className="pl-[40px]   justify-center px-3 mb-6" >
                    <label className="block uppercase tracking-wide text-[#074746] text-[14px] font-[400px]  mb-2" htmlFor="grid-first-name">
                      Email
                    </label>
                    <input className="appearance-none border w-full rounded py-3 px-10 text-gray-700 bg-white leading-tight focus:outline-none border-[#074746] focus:shadow-outline" id="grid-last-name"
                      type="text"
                      name="username"
                      placeholder=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.username} />
                  </div>
                  <div className=" pl-[40px] px-4 mb-6">
                    <label className="block uppercase tracking-wide text-[#074746] text-[14px] font-[400px]  mb-2" htmlFor="grid-first-name">
                      Password
                    </label>
                    <input className="appearance-none w-full border rounded  py-3 px-8 text-gray-700 leading-tight focus:outline-none border-[#074746] focus:shadow-outline" id="grid-last-name"
                      type="password"
                      name="password"
                      placeholder=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.password} />
                  </div>
                  <div className="w-full grid justify-items-end pr-[20px]">
                    <Link href="/password/reset_code">
                      <a className="text-[#074746]  text-[13px] underline" >Forgot Password?</a>
                    </Link> 
                  </div>
                  <div className="w-full pl-[40px] pt-[50px]px-4 mb-6 md:mb-0">
                    <p className="text-[#E70000] pt-[15px] pb-[5px] text-base font-normal" >
                      {errorMessage}
                    </p>
                    <button type="submit" className="bg-[#F9D456] text-[#074746]  font-bold py-3 px-5 rounded focus:outline-none focus:shadow-outline" >
                      Log In
                    </button>
                    <p className="inline-block w-full  pt-[30px]  text-sm text-[#074746] ">
                      Don’t have access yet? 
                      <Link href="/register">
                          <a className="underline"> Sign Up</a>
                      </Link> 
                    </p>
                  </div>
                </div>
              </form>
            </div>
            <FooterAuth />
          </div>
        )}
      </Formik>
    </div>
  );
}