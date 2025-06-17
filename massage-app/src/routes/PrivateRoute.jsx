import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { children } from "react";

const PrivateRoute = ({ Children }) => {
    const { user } = useAuth();

    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;