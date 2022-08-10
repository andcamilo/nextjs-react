import { Formik } from "formik";
import HeaderAuth from "../../components/header-auth";
import FooterAuth from "../../components/footer-auth";
import useValidationSchema from "../../hooks/useValidationSchema";
import useAuth from '../../hooks/useAuth';
import { useRouter } from "next/router";
import { AppContext } from "../../context/context";
import {  useContext } from "react";

export default function Reset(){

	const router = useRouter()
	const { username } = router.query
	const { errorMessage } = useContext(AppContext);
	const { resetPasswordSchema } = useValidationSchema();
	const { resetPassword } = useAuth()


	return (
		<div>
			<Formik
				initialValues={{
					username: username,
					code: "",
					password: "",
					confirm_password: ""
				}}
				validationSchema={resetPasswordSchema}
				onSubmit={resetPassword}
				validateOnMount={false}
				validateOnChange={false}
				validateOnBlur={false}
			>
				{
					({
						errors,
						values,
						handleSubmit,
						handleBlur,
						handleChange
					}) => (
         				<div>
							<HeaderAuth title={"Reset Password"}  />
							<div className=" bg-[#FAF9F5] justify-center pt-[80px] flex h-809">
						
								<form onSubmit={handleSubmit} className=" rounded px-8 pt-6 pb-8 mb-4">
									<div className="pb-[50px]">
										<p className="text-[#074746] text-center">Enter and confirm your new password. Your password must be at least eight characters</p>
										<p className="text-[#074746] text-center"> with one lower case letter, one upper case letter, and one special character.</p>
									</div>
									<div className="grid justify-center mb-4 pb-[200px] ">
										<div className="pl-[40px]   justify-center px-3 mb-6" >
											<label className="block uppercase tracking-wide text-[#074746] text-[14px] font-[400px]  mb-2" htmlFor="grid-first-name">
												Confirmation Code
											</label>
											<input className={`appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
												${errors.code !== undefined 
												? " border-[#E70000]" 
												: " border-[#074746]"}`} 
												id="confirmation-code" 		
												type="text"
												name="code"
												placeholder=""
												onChange={handleChange}
												onBlur={handleBlur}
												value={values?.code}/>
											{errors.code !== undefined && (<p className="text-[#E70000] text-[12px]" >{errors.code}</p>)}
										</div>
											<div className="pl-[40px]   justify-center px-3 mb-6" >
												<label className="block uppercase tracking-wide text-[#074746] text-[14px] font-[400px]  mb-2" htmlFor="grid-first-name">
													New Password
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
													value={values?.password}/>
												{errors.password !== undefined && (<p className="text-[#E70000] text-[12px]" >{errors.password}</p>)}
											</div>
											<div className=" pl-[40px] px-4 mb-6">
												<label className="block uppercase tracking-wide text-[#074746] text-[14px] font-[400px]  mb-2" htmlFor="grid-first-name">
													Confirm Password
												</label>
												<input className={`appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
													${errors.confirm_password !== undefined 
													? " border-[#E70000]" 
													: " border-[#074746]"}`} 
													id="confirm-password" 		
													type="password"
													name="confirm_password"
													placeholder=""
													onChange={handleChange}
													onBlur={handleBlur}
													value={values?.confirm_password}/>
												{errors.confirm_password !== undefined && (<p className="text-[#E70000] text-[12px]" >{errors.confirm_password}</p>)}
											</div>	
											<div className="w-full pl-[40px] pt-[50px]px-4 mb-6 md:mb-0">
												<button type="submit" className="bg-[#F9D456]  text-[#074746] font-bold py-3 px-5 rounded focus:outline-none focus:shadow-outline" >
													Update Password
												</button>
									
											</div>  
									</div>
								</form> 
							</div>
							<FooterAuth/>
						</div>	
					)
				}
			</Formik>
		</div>
	)
}