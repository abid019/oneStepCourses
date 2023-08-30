import "./App.css";
import { Route,Routes } from "react-router-dom";
import Navbar from "./Compponents/Navbar";
// import Home from "./pages/Home"
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {useState} from 'react'
import Privatecourse from './pages/Privatecourse'
import About from "./pages/About";
import Videos from './Compponents/Videos';
import Contact from './pages/Contact';
function App() {
  const [isLogIn,setIslogin] = useState(false);
  return (
    <div className="h-full">
      <Navbar isLogIn={isLogIn} setIslogin={setIslogin} />
      <Courses/>
      <Routes>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/courses" element={
          <Privatecourse isLogIn = {isLogIn}>
              <Courses/>
          </Privatecourse>
        }/>
        
        <Route path="/login" element={<Login setIslogin = {setIslogin}/>}/>
        <Route path="/singup" element={<Signup setIslogin = {setIslogin}/>}/>
        <Route path = "/videos" element={<Videos/>} />
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
