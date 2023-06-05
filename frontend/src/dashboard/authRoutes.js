import {useSelector} from "react-redux";
import {Outlet,useLocation,Navigate} from "react-router-dom";

export const AuthRoutes = ({allowedDesignation})=> {
    const {user} = useSelector((state)=>state.users)
    const location = useLocation();
      
    return allowedDesignation?.includes(user.designation) ? <Outlet /> :
    user.username ? <Navigate to='unauthorized' state={{from: location}} replace />
    : <Navigate to='sign-in' state={{from: location}} replace />
    // return user.username ? <Outlet /> : navigate('sign-in',{state:{from: location}, replace: true})
}