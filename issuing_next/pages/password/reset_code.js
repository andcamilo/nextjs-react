import { Formik } from "formik";
import useValidationSchema from "../../hooks/useValidationSchema";
import useAuth from '../../hooks/useAuth';
import HeaderAuth from "../../components/header-auth";
import FooterAuth from "../../components/footer-auth";

export default function ResetCode() {

	const { resetPasswordRequestSchema } = useValidationSchema();
	const { resetPasswordRequest } = useAuth();

	return (
		<div>
			<Formik
				initialValues={{
					username: ""
				}}
				onSubmit={resetPasswordRequest}
				validationSchema={resetPasswordRequestSchema}
				validateOnMount={false}
				validateOnChange={false}
				validateOnBlur={false}
			>
				{
					({
						errors,
						values,
						handleSubmit,
						handleChange,
						handleBlur
					}) => (
						<div>
							<HeaderAuth title={"Reset Password"} />
							<div className=" bg-[#FAF9F5] justify-center pt-[80px] flex h-809">
								<form onSubmit={handleSubmit} className=" rounded px-8  pb-8 mb-4">
									<div className="pb-[50px]">
										<p className="text-[#074746] text-center">Enter the email address you registered with and we`ll send you</p>
										<p className="text-[#074746] text-center"> instructions to reset your password.</p>
									</div>
									<div className=" mb-4 pb-[200px] ">
										<div className="pl-[40px]   justify-center px-3 mb-6" >
											<label className="block uppercase tracking-wide text-[#074746] text-[14px] font-[400px]  mb-2" htmlFor="grid-first-name">
												Work Email
											</label>
											<input className={`appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
												${errors.username !== undefined 
												? " border-[#E70000]" 
												: " border-[#074746]"}`} 
												id="grid-last-name"
												type="email"
												name="username"
												placeholder=""
												onChange={handleChange}
												onBlur={handleBlur}
												value={values?.username} />
											{errors.username !== undefined && (<p className="text-[#E70000] text-[12px]" >{errors.username}</p>)}
										</div>
										<div className="w-full pl-[40px] pt-[20px] px-4 mb-6 md:mb-0">
											<button type="submit" className="bg-[#F9D456]  text-[#074746] font-bold py-3 px-5 rounded focus:outline-none focus:shadow-outline" >
												Send Reset Instructions
											</button>
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