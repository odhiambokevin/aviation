import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const AuthRoutes = ({children})=> {
    const navigate = useNavigate();
    const {user} = useSelector((state)=>state.users)
    if(!user.length) {
        return navigate('sign-in')
    } return children
}