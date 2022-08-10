import { Formik } from "formik";
import useValidationSchema from "../hooks/useValidationSchema";
import useRegister from '../hooks/useRegister'
import FooterAuth from "../components/footer-auth"
import HeaderAuth from "../components/header-auth"
import Link from 'next/link'

export default function Register() {

  const { registerSchema } = useValidationSchema()
  const {
    register,
  } = useRegister()


  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          family_name: "",
          email: "",
          website: "",
          clientID: "",
          password: "",
        }}
        validationSchema={registerSchema}
        onSubmit={register}
        validateOnMount={false}
        validateOnChange={false}
        validateOnBlur={false}>
        {({
          errors,
          values,
          handleSubmit,
          handleChange,
          handleBlur
        }) => (
          <div>
            <HeaderAuth title={"Sign up for access to our platform"} />
            <div className="bg-[#FAF9F5]  justify-center pt-[80px] pb-[200px] flex max-h-6xl">
              <form onSubmit={handleSubmit} className="w-screen justify-center max-w-6xl">
                <div className="flex flex-wrap -mx-7 mb-6">
                  <div className="w-full pl-[40px] md:w-1/2 px-4 mb-6 md:mb-0 pb-[20px]">
                    <label className="block uppercase tracking-wide text-[#074746] text-[14px] font-[400px]  mb-2" htmlFor="grid-first-name">
                      First Name
                    </label>
                    <input className={`appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
                        ${errors.username !== undefined 
                        ? " border-[#E70000]" 
                        : " border-[#074746]"}`} 
                      id="given_name"
                      type="text"
                      name="username"
                      placeholder=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.username} />
                      {errors.username !== undefined && (<p className="text-[#E70000] text-[12px]" >{errors.username}</p>)}
                  </div>
                  <div className="w-full pl-[40px] md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-[#074746] text-[14px] font-[400px] mb-2" >
                      Last Name
                    </label>
                    <input className={`appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
                      ${errors.family_name !== undefined 
                      ? " border-[#E70000]" 
                      : " border-[#074746]"}`}
                      id="family_name" 
                      type="text"
                      name="family_name"
                      placeholder=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.family_name}
                       />
                       {errors.family_name !== undefined && (<p className="text-[#E70000] text-[12px]" >{errors.family_name}</p>)}
                     
                  </div>
                  <div className="w-full md:w-1/2 pl-[40px] pt-[10px] pb-[20px]  px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-[#074746] text-[14px] font-[400px] mb-2" >
                      Work Email
                    </label>
                    <input className={`appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
                      ${errors.email !== undefined 
                      ? " border-[#E70000]" 
                      : " border-[#074746]"}`}
                      id="email"
                      type="email"
                      name="email"
                      placeholder=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.email} />
                      {errors.email !== undefined && (<p className="text-[#E70000] text-[12px]" >{errors.email}</p>)}
                  </div>
                  <div className="w-full pl-[40px] pt-[10px] md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-[#074746] text-[14px] font-[400px] mb-2" >
                      Password
                    </label>
                    <input className={`appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
                      ${errors.password !== undefined 
                      ? " border-[#E70000]" 
                      : " border-[#074746]"}`}
                      id="password"
                      type="password"
                      name="password"
                      placeholder=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.password} />
                      {errors.password !== undefined && (<p className="text-[#E70000] text-[12px]" >{errors.password}</p>)}
                    <p className="text-[10px] text-[#074746] ">Must be at least 8 characters with 1 lower case letter, 1 upper case letter, and 1 special character.</p>
                  </div>
                  <div className="w-full pl-[40px] md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-[#074746] text-[14px] font-[400px] mb-2" htmlFor="grid-first-name">
                      Company
                    </label>
                    <input className={`appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
                      ${errors.clientID !== undefined 
                      ? " border-[#E70000]" 
                      : " border-[#074746]"}`}
                      id="company"
                      type="text"
                      name="clientID"
                      placeholder=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.clientID} />
                      {errors.clientID !== undefined && (<p className="text-[#E70000] text-[12px]" >{errors.clientID}</p>)}
                  </div>
                  <div className="w-full pl-[40px] md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-[#074746] text-[14px] font-[400px] mb-2" >
                      Work Website
                    </label>
                    <input className={`appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
                      ${errors.website !== undefined 
                      ? " border-[#E70000]" 
                      : " border-[#074746]"}`}
                      id="website"
                      type="text"
                      name="website"
                      placeholder=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.website} />
                      {errors.website !== undefined && (<p className="text-[#E70000] text-[12px]" >{errors.website}</p>)}
                  </div>
                  <div className="w-full pl-[40px] md:w-1/2 px-3 mb-6 md:mb-0">
                  </div>
                  <div className="w-full pl-[40px] pt-[50px] md:w-1/2 px-3 mb-6 md:mb-0">
                    <button type="submit" className="bg-[#F9D456]  text-[#074746] font-bold py-3 px-5 rounded focus:outline-none focus:shadow-outline" >
                      Sign Up
                    </button>
                    <p className="inline-block w-full align-baseline pt-[30px]  text-sm text-[#074746] ">
                      Already have an account? 
                      <Link href="/login">
                        <a className="underline">  Log in</a>
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
  )
}