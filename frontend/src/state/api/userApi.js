import axios from "axios";

//endpoint for registering a new user
const registerUser = async (userData)=>{
    const res = await axios.post("http://127.0.0.1:8000/api/v1/auth/users/", userData);
    return res.data
}

const userApi = {registerUser}

export default userApi;