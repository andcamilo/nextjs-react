import jwtDecode from "jwt-decode";

export default async function handler (req, res) {
    const { cookies } = req;

    const jwt = cookies.CognitoJWT; 
    const token = jwtDecode(jwt)
    

    res.json(token)
}

