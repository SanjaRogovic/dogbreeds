import "./App.css";
import { Routes, Route } from 'react-router-dom'
import DogList from "./components/DogList"
import Homepage from "./components/Homepage"


function App() {
  

  return (
    <>


  
  <Routes>
    <Route path="/homepage" element={<Homepage/>} />
    <Route path="/doglist/:index" element={<DogList />}/>
  </Routes>
    </>
  );
}

export default App;
