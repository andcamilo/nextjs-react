import {
	CognitoIdentityProviderClient,
	ConfirmSignUpCommand
} from "@aws-sdk/client-cognito-identity-provider"


export default async function handler (req, res) {
	if (req.method !== 'POST') return res.status(405).send()

	const params = {
		ClientId: process.env.COGNITO_APP_CLIENT_ID,
		ConfirmationCode: req.body.code,
		Username: req.body.username
	}

	const cognitoClient = new CognitoIdentityProviderClient({
		region:  process.env.COGNITO_REGION
	})
	const confirmSignUpCommand = new ConfirmSignUpCommand(params)

	try {
		const response = await cognitoClient.send(confirmSignUpCommand)
		
		return res.status(response['$metadata'].httpStatusCode).send()
	} catch (err) {
		console.log(err)
		return res.status(err['$metadata'].httpStatusCode).json({ message: err.toString() })
	}
}