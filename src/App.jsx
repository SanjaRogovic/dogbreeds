import "./App.css";
import { Routes, Route } from 'react-router-dom'
import DogList from "./components/DogList"
import Homepage from "./components/Homepage"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/doglist/:index" element={<DogList />} />
        </Routes>
    </>
  );
}

export default App;
