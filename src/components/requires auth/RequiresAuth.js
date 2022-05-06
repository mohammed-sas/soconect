import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const RequiresAuth = ({ children }) => {
  const location = useLocation();
  const authState = useSelector(state => state.auth);
  const {user} = authState;
  return user ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default RequiresAuth;
