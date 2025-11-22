import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Posts from "./Pages/Posts";
import { ThemeProvider } from "./context/Themecontext";
import { BrowserRouter as Router,Route,Routes,Link, BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigatiom";
import Footer from "./components/Footer";
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/posts" element={<Posts/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </ThemeProvider>
        
  )
}
export default App;