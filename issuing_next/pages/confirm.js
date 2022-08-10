import { Formik } from "formik";
import useValidationSchema from "../hooks/useValidationSchema";
import useRegister from "../hooks/useRegister";
import { useRouter } from "next/router";
import HeaderAuth from "../components/header-auth";
import FooterAuth from "../components/footer-auth";
import Link from 'next/link'

export default function Confirm() {

  const router = useRouter();
  const { username } = router.query;

  const { confirm } = useRegister();
  const { confirmSchema } = useValidationSchema();
  return (
    <div>
      <Formik
        initialValues={{
          username: username,
          code: ""
        }}
        onSubmit={confirm}
        validationSchema={confirmSchema}
        validateOnMount={false}
        validateOnChange={false}
        validateOnBlur={false}>
        {
          ({

            values,
            handleSubmit,
            handleChange,
            handleBlur
          }) => (

            <div>
              <HeaderAuth title={"Enter Confirmation Code"} />
              <div className="bg-[#FAF9F5] justify-center pt-[80px] flex h-809">
                <form onSubmit={handleSubmit} className=" rounded px-8 pt-6 pb-8 mb-4">
                  <div className="pb-[50px]">
                    <p className="text-[#074746] text-center">Please enter the code that we sent to your email in order to complete </p>
                    <p className="text-[#074746] text-center"> your signup.</p>
                  </div>
                  <div className=" mb-4 pb-[200px] ">
                    <div className="pl-[40px]   justify-center px-3 mb-6" >
                      <label className="block uppercase tracking-wide text-[#074746] text-[14px] font-[400px]  mb-2" htmlFor="grid-first-name">
                        Confirmation Code
                      </label>
                      <input className="appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none border-[#074746] focus:shadow-outline" id="grid-last-name"
                        type="text"
                        name="code"
                        placeholder=""
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.code} />
                    </div>
                    <div className="w-full pl-[40px] pt-[50px]px-4 mb-6 md:mb-0">
                      <button type="submit" className="bg-[#F9D456] text-[#074746] font-bold py-3 px-5 rounded focus:outline-none focus:shadow-outline" >
                        Submit Code
                      </button>
                      <p className="inline-block w-full  pt-[10px]  text-sm text-[#074746] ">
                        <Link href="/register">
                          <a>	Resend Code</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
              <FooterAuth />
            </div>
          )
        }
      </Formik>
    </div>
  )
}