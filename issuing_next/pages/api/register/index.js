import { CognitoIdentityProviderClient, SignUpCommand } from '@aws-sdk/client-cognito-identity-provider'


export default async function handler(req, res) {
	if (req.method !== 'POST') return res.status(405).send()


	const params = {
		ClientId: process.env.COGNITO_APP_CLIENT_ID,
		Password: req.body.password,
		Username: req.body.username,
		UserAttributes: [
			{
				Name: 'email',
				Value: req.body.email
			 },
			{
				Name: 'family_name',
				Value: req.body.family_name
			},
			{
				Name: 'given_name',
				Value: req.body.username
			},
			{
				Name: 'website',
				Value: req.body.website
			},
			{
				Name: 'custom:userRole',
				Value: "admin"
			},
			{
				Name: 'custom:clientID',
				Value: req.body.clientID
			}
		]
	}


	const cognitoClient = new CognitoIdentityProviderClient({
		region: process.env.COGNITO_REGION
	})
	const signUpCommand = new SignUpCommand(params)

	try {
		const response = await cognitoClient.send(signUpCommand)
		console.log(response)
		return res.status(response['$metadata'].httpStatusCode).send()
	} catch (err) {
		console.log(err)
		return res.status(err['$metadata'].httpStatusCode).json({ message: err.toString() })
	}
}