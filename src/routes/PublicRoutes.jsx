import {Navigate, Outlet} from "react-router-dom"

const PublicRoutes = () => {

   const isAuth = sessionStorage.getItem("token")

  return !isAuth ? <Navigate to="/dogbreeds/start" /> : <Outlet />
}

export default PublicRoutes