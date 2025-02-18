// import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
// import { auth } from "../firebase";
import { Spinner, Container } from "react-bootstrap";

function ProtectedRoute({ children }) {
  // const [user, loading] = useAuthState(auth);

  const [user, setUser] = useState(true);

  if (!user) return <Navigate to="/login" />;
  return children;
}

export default ProtectedRoute;
