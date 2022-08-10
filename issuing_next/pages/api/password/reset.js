import {
	CognitoIdentityProviderClient,
	ConfirmForgotPasswordCommand
} from "@aws-sdk/client-cognito-identity-provider"


export default async function handler(req, res) {
	if (req.method !== 'POST') return res.status(405).send()

	const params = {
		ClientId: process.env.COGNITO_APP_CLIENT_ID,
		ConfirmationCode: req.body.code,
		Password: req.body.password,
		Username: req.body.username
	}

	const cognitoClient = new CognitoIdentityProviderClient({
		region: process.env.COGNITO_REGION
	})
	const confirmForgotPasswordCommand = new ConfirmForgotPasswordCommand(params)

	try {
		const response = await cognitoClient.send(confirmForgotPasswordCommand)
	
		return res.status(response['$metadata'].httpStatusCode).send()
	} catch (err) {
	
		return res.status(err['$metadata'].httpStatusCode).json({ message: err.toString() })
	}
}