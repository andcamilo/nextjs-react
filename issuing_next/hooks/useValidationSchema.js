import * as yup from "yup"
import YupPassword from 'yup-password'

YupPassword(yup)

export default function useValidationSchema(){
  return {
    registerSchema: yup.object().shape({
      username: yup.string().required('Please enter a first name.'),
      family_name: yup.string().required('Please enter a family name.'),
      email: yup.string().email().required('Please enter an valid email address.'),
      password: yup.string().required('Please create a password.')
      .min(8, 'Password must to be at least 8 characters long.')
      .minLowercase(1, 'password must contain at least 1 lower case letter')
      .minUppercase(1, 'password must contain at least 1 upper case letter')
      .minNumbers(1, 'password must contain at least 1 number')
      .minSymbols(1, 'password must contain at least 1 special character'),
      clientID: yup.string().required('Please enter a valid company.'),
      website: yup.string().url().required('Please enter a valid url.'),
    }),

    loginSchema: yup.object().shape({
      username: yup.string().required('Email is required.'),
      password: yup.string().required('Password is required.')
    }),

    confirmSchema: yup.object().shape({
      username: yup.string().required('Email is required.'),
      code: yup.string().required('Confirmation code is required.')
    }),

    resetPasswordRequestSchema: yup.object().shape({
      username:  yup.string().email().required('Please enter an valid email address.'),
    }),

    resetPasswordSchema: yup.object().shape({
      code: yup.string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(6, 'Must be exactly 6 digits')
      .max(6, 'Must be exactly 6 digits'),
      password: yup.string().required('Please create a password.')
        .min(8, 'Password needs to be at least 8 characters long.'),
      confirm_password: yup.string().required('Please confirm your password.')
        .oneOf([yup.ref('password')], 'Passwords do not match')
    })
  }
}