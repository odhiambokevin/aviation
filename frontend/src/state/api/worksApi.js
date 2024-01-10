import axios from "axios";

//get works
const getWorks = async ()=>{
    const res = await axios.get("http://127.0.0.1:8000/api/v1/works/all/");
    return res.data
}

const worksApi = {getWorks}

export default worksApi;