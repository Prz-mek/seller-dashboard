import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "./AuthContext";
export default function PrivateRoute(props) {
  let auth = useContext(AuthContext);
  let location = useLocation();
  return auth.isAuthenticated ? (
    props.children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
