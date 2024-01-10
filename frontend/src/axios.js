import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/'
axios.interceptors.response.use(response => response, async error => {
    if(error.response.code === 'token_not_valid' && !error.config._retry) {
        error.config._retry = true;
       const response = await axios.post("auth/jwt/refresh/", {}, {withCredentials: true});
       if(response.status === 200) {
         axios.defaults.headers.common['Authorization'] = `JWT ${response.data['token']}`
       return axios(error.config);
        }
    } return error;
})