import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext/AuthContext"
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = ({ allowedRole }) => {
    const location = useLocation()
    const { user } = useContext(AuthContext);
    return (
        user?.role === allowedRole 
        ? <Outlet /> 
        : user 
            ? <Navigate to="/unauth" state={{from : location}} replace />
            : <Navigate to="/login" state={{from : location}} replace />
    );
}

export default RequireAuth
