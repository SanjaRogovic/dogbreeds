import "./App.css";
import { Routes, Route } from "react-router-dom";
import DogList from "./components/DogList";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Start from "./components/Start";
import Register from "./components/Register";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dogbreeds/start" element={<Start />} />
        <Route path="/dogbreeds/homepage" element={<Homepage />} />
        <Route path="/doglist/:index" element={<DogList />} />
        <Route path="/dogbreeds/login" element={<Login />} />
        <Route path="/dogbreeds/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
