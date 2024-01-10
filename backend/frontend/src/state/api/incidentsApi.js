import axios from "axios";

//retrieve latest unverified incidents
const getIncidents = async ()=>{
    const res = await axios.get("http://127.0.0.1:8000/api/v1/incidents/all/");
    return res.data
}
//retrieve verified incidents
const getVerifiedIncidents = async ()=>{
    const res = await axios.get("http://127.0.0.1:8000/api/v1/incidentcontrol/all/");
    return res.data
}

//endpoint for posting verified incident
const verifyIncident = async ({incidentid,values})=>{
    
    const res = await axios.patch(`http://127.0.0.1:8000/api/v1/incidentcontrol/raw/${incidentid}/`, values);
    return res.data
}

const incidentsApi = {getIncidents,getVerifiedIncidents,verifyIncident}

export default incidentsApi;
