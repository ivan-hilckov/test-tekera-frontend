import { Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Auth from "page/Auth";
import Profile from "page/Profile";
import Root from "page/Root";

function Layout() {
  return <Outlet />;
}

function RequireAuth({ children }: { children: JSX.Element }) {
  const [cookies] = useCookies(["auth"]);
  let location = useLocation();

  if (!cookies.auth) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return children;
}

function NotRequireAuth({ children }: { children: JSX.Element }) {
  const [cookies] = useCookies(["auth"]);
  
  if (cookies.auth) {
    return <Navigate to="/profile" replace />;
  }

  return children;
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Root />} />
        <Route path="/auth" element={<NotRequireAuth><Auth /></NotRequireAuth>} />
        <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
      </Route>
    </Routes>
  );
}

export default App;
