import { CognitoIdentityProviderClient, AdminInitiateAuthCommand,  } from "@aws-sdk/client-cognito-identity-provider"
import { serialize } from "cookie";




export default async function handler(req, res) {
	if (req.method !== 'POST') return res.status(405).send()


	const params = {
		AuthFlow: 'ADMIN_USER_PASSWORD_AUTH',
		ClientId: process.env.COGNITO_APP_CLIENT_ID,
		UserPoolId: process.env.COGNITO_USER_POOL_ID,
		AuthParameters: {
			USERNAME: req.body.username,
			PASSWORD: req.body.password
		}
	}

	const cognitoClient = new CognitoIdentityProviderClient({
		region: process.env.COGNITO_REGION
	})
	const adminInitiateAuthCommand = new AdminInitiateAuthCommand(params)

	try {
		const response = await cognitoClient.send(adminInitiateAuthCommand)
		const token = response.AuthenticationResult.IdToken

		const serialised = serialize("CognitoJWT", token, {
			httpOnly: true,
			sameSite: "strict",
			maxAge: 60 * 60 * 24 * 30,
			path: "/"
		})
		
		res.setHeader('Set-Cookie', serialised);
		return  res.status(response['$metadata'].httpStatusCode).json({
			...response.AuthenticationResult
		})
	} catch(err) {

		return res.status(err['$metadata'].httpStatusCode).json({ message: err.toString() })
	}
}