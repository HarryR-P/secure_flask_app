import { Outlet, Navigate } from "react-router";

const PrivateRoutes = () => {
  let auth = { 'token' : false}
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;