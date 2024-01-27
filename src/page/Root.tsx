import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Root() {
  const [cookies] = useCookies(["auth"]);
  const to = !cookies.auth ? "/auth" : "/profile";

  return <Navigate to={to} replace />;
}

export default Root;
