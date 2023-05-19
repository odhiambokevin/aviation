import axios from "axios";

//endpoint for registering a new user
const registerUser = async (userData)=>{
    const res = await axios.post("http://127.0.0.1:8000/api/v1/auth/users/", userData);
    return res.data
}

//endpoint for user login
const loginUser = async (userData)=>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const res = await axios.post("http://127.0.0.1:8000/api/v1/auth/jwt/create/", userData, config);
    return res.data
}

//endpoint for geting active user
const getUser = async ()=>{
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`, 
            'Accept': 'application/json'
        }
    }
    const res = await axios.get("http://127.0.0.1:8000/api/v1/profile/me/", config);
    return res.data.profile
} 

const userApi = {registerUser, loginUser, getUser}

export default userApi;