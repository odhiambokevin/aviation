import axios from "axios";

//get blogs
const getIncidents = async ()=>{
    const res = await axios.get("http://127.0.0.1:8000/api/v1/incidents/all/");
    return res.data
}

const incidentsApi = {getIncidents}

export default incidentsApi;
