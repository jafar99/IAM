import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Component/Home';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
  
      <Routes>
        
          <Route path='/' element={<Home/>} />
          <Route path="blogs" element={<Navbar />} />
      
      </Routes>
    </BrowserRouter>
       
       
    </div>
  );
}

export default App;
