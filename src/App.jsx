import React, { useContext } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Posts from "./Pages/Posts";
import { ThemeProvider } from "./context/Themecontext";
import { BrowserRouter as Router,Route,Routes,Link, BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigatiom";
import Footer from "./components/Footer";
import { ThemeContext } from "./context/Themecontext";
function App() {
  const { theme } = useContext(ThemeContext);
  return (
   <div className={`d-flex flex-column min-vh-100 w-100 ${theme === 'light' ? 'bg-light' : 'bg-dark'}`}>
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
    </div>
        
  )
}
export default App;