import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext/AuthContext"
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = ({ allowedRole }) => {
    const location = useLocation()
    const { user } = useContext(AuthContext);
    return (
        user ? 
            (allowedRole.findIndex((obj) => obj === user?.role) !== -1
            ? <Outlet /> 
            : user 
                ? <Navigate to="/unauth" state={{from : location}} replace />
                : <Navigate to="/" state={{from : location}} replace />)
            : <Navigate to="/" state={{from : location}} replace />
    );
}

export default RequireAuth
