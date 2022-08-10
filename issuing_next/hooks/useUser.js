import axios from "axios";
import jwtDecode from "jwt-decode";

export default async function useUser() {
    const user = await axios.get("/api/user");
   
    const token = user.data.token;
    const data = jwtDecode(token);
  
    return data;
}


