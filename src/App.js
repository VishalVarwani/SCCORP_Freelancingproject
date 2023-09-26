import logo from './logo.svg';
import './App.css';
import {  Route, Routes } from "react-router-dom";
import Aboutus from './components/about';
import About from './components/home/about';
import Featured from './components/home/featured';
import Demooo from './demooo';
import Home from './components/home';
import Service from './components/services/main';
import Buy from './components/services/buy';
import Rent from './components/services/rent';
import Singleprop from './components/services/singleprop';
import Gallery from './components/gallery';
import Contact from './components/contact';


function App() {
  return (
    <div>
  <Routes>

<Route path='about' element={<Aboutus/>}/>
<Route path='featured' element={<Featured/>}/>
<Route path='hello' element={<Demooo/>}/>
<Route path='/' element={<Home/>}/>
<Route path='gallery' element={<Gallery/>}/>
<Route path='contact' element={<Contact/>}/>


{/* {services} */}
<Route path='service' element={<Service/>}/>
<Route path='buy' element={<Buy/>}/>
<Route path='rent' element={<Rent/>}/>
<Route path='singleprop' element={<Singleprop/>}/>




</Routes>
    </div>
  );
}

export default App;
