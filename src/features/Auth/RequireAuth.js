import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext/AuthContext"
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = ({ allowedRole }) => {
    const location = useLocation()
    const { user } = useContext(AuthContext);
    let role = "";
    if (user) role = user.role;

    const content = role === allowedRole ? <Outlet /> : <Navigate to="/" state={{from : location}} replace />
    return content;
}

export default RequireAuth
