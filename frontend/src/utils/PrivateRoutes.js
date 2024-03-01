import { Outlet, Navigate } from "react-router";

const PrivateRoutes = (props) => {
    const { loggedIn } = props
    return loggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;