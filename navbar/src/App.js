import './App.css';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/PortFolio';
import Contact from './components/Contact';

function App() {
  const [colored, setColored] = useState("")

  useEffect(() => {
    fetch('https://54.uz/rang.php')
  .then(response => response.json())
  .then(data => setColored(data.status))
  })
   let bg ="green"
    if(colored === "ko`k"){
      bg = "blue"
    }
     else if (colored === "oq"){
       bg="white"
     }
     else if (colored === "qizil"){
       bg="red"
     }
     else if (colored === "sariq"){
       bg="yellow"
     }
     else if (colored === "yaxshi"){
       bg="green"
     }
     else if (colored === "qora"){
       bg="black"
     }
  
  return (
    <div 
    style={{"backgroundColor":bg}}
     >
      <Router>
      <Navbar colored = {colored}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path = "/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>

    </div>

        
  );
}

export default App;
