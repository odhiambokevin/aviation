import axios from "axios";

//get blogs
const getBlogs = async ()=>{
    const res = await axios.get("http://127.0.0.1:8000/api/v1/blogs/all/");
    return res.data
}

const blogApi = {getBlogs}

export default blogApi;