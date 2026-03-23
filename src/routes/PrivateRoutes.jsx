import { useContext } from "react";
import AuthContext from "../auth/context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { login } = useContext(AuthContext);
    if (login) {
        return children;
    } else {
        return <Navigate to='/dashboard/auth/login'></Navigate>
    }
};

export default PrivateRoutes;