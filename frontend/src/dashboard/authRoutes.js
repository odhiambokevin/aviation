import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const AuthRoutes = ({children})=> {
    const navigate = useNavigate();
    const {user} = useSelector((state)=>state.users)
    if(!user?.id) {
        return navigate('/projects/airport-wildlife-management/sign-in')
    } return children
}