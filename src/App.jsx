import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import DogList from "./components/DogList";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Start from "./components/Start";
import Register from "./components/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import PublicRoutes from "./routes/PublicRoutes"
import PrivateRoutes from "./routes/PrivateRoutes"
// import Logout from "./components/Logout"

function App() {
  return (
    <>
       <Routes>
        <Route path="/dogbreeds/start" element={<Start />} />
        <Route path="/dogbreeds/login" element={<Login />} />
        <Route path="/dogbreeds/register" element={<Register />} />
        <Route path="/dogbreeds/homepage" element={<Homepage />} />
        <Route path="/doglist/:index" element={<DogList />} />
      </Routes>



      {/* <Logout /> */}
      {/* <Routes>
        <Route path="/" element={<PublicRoutes />}>
          <Route index element={<Start />} />
          <Route path="*" element={<Navigate to={'/dogbreeds'} />} />
        </Route>
        <Route path="/" element={<PrivateRoutes />}>
        <Route path="/dogbreeds/login" element={<Login />} />
          <Route path="/dogbreeds/register" element={<Register />} />
          <Route path="/dogbreeds/homepage" element={<Homepage />} />
          <Route path="/doglist/:index" element={<DogList />} />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes> */}
    </>
  );
}

export default App;
