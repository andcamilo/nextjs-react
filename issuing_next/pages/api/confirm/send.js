import {
	CognitoIdentityProviderClient,
	ResendConfirmationCodeCommand
} from "@aws-sdk/client-cognito-identity-provider"


export default async function handler (req, res) {
	if (req.method !== 'POST') return res.status(405).send()

	const params = {
		ClientId: process.env.COGNITO_APP_CLIENT_ID,
		Username: req.body.username
	}

	const cognitoClient = new CognitoIdentityProviderClient({
		region:  process.env.COGNITO_REGION
	})
	const resendConfirmationCodeCommand = new ResendConfirmationCodeCommand(params)

	try {
		const response = await cognitoClient.send(resendConfirmationCodeCommand)
		
		return res.status(response['$metadata'].httpStatusCode).send()
	} catch (err) {
		console.log(err)
		return res.stat(err['$metadata'].httpStatusCode).json({ message: err.toString() })
	}
}