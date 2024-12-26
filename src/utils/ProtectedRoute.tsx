import { Navigate } from "react-router-dom";
import { MyProviderProps, useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }: MyProviderProps) {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
}

export default ProtectedRoute;
