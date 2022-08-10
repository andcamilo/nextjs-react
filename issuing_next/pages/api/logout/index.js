import { CognitoIdentityProviderClient, AdminUserGlobalSignOutCommand } from "@aws-sdk/client-cognito-identity-provider"
import { serialize } from "cookie";


export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send()

    const params = {
		UserPoolId: process.env.COGNITO_USER_POOL_ID,
		Username: req.body.username
	}

    const cognitoClient = new CognitoIdentityProviderClient({
		region: process.env.COGNITO_REGION
	})

    const adminUserGlobalSignOutCommand = new AdminUserGlobalSignOutCommand(params)

    try {
		const response = await cognitoClient.send(adminUserGlobalSignOutCommand)
		const serialised = serialize("CognitoJWT", null, {
			httpOnly: true,
			sameSite: "strict",
			maxAge: -1,
			path: "/"
		})
		res.setHeader('Set-Cookie', serialised);

		
		return res.status(response['$metadata'].httpStatusCode).json({
			...response.AuthenticationResult
		})
	} catch(err) {
		console.log(err)
		return res.status(err['$metadata'].httpStatusCode).json({ message: err.toString() })
	}
}