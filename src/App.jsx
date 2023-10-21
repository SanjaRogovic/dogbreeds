import "./App.css";
import { Routes, Route } from 'react-router-dom'
import DogList from "./components/DogList"
import Homepage from "./components/Homepage"
import Login from "./components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
        <Routes>
          <Route path="/dogbreeds" element={<Homepage />} />
          <Route path="/doglist/:index" element={<DogList />} />
          <Route path="/dogbreeds/login" element={<Login />} />
        </Routes>
    </>
  );
}

export default App;
