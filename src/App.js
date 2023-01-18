import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Services from './Component/Services';
import Products from './Component/Products';
import AboutUs from './Component/AboutUs';
import Contact from './Component/Contact';
// import Services from './Services'
// import Products from './Products'

function App() {
  return (
    <div className="App">
       
       <Navbar />
       <Home/>
       <Services/>
       <Products/>
       <AboutUs/>
       <Contact/>
  

    </div>
  );
}

export default App;
