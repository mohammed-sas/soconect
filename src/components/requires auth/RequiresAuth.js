import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context";

const RequiresAuth = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  return token ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default RequiresAuth;
