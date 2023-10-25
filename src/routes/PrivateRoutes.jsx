import {Navigate, Outlet} from "react-router-dom"

const PrivateRoutes = () => {

    const isAuth = sessionStorage.getItem("token")
    
  return !isAuth ? <Navigate to="/dogbreeds/login" /> : <Outlet />
}

export default PrivateRoutes