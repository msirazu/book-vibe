import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../features/auth/context/AuthContext";

const PrivateRoutes = ({ children }) => {
    const { login } = useContext(AuthContext);
    if (login) {
        return children;
    } else {
        return <Navigate to='/dashboard/auth/login'></Navigate>
    }
};

export default PrivateRoutes;