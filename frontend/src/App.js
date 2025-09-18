import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Register from './Pages/Account/Register';
import Login from './Pages/Account/Login';
import Courses from './Pages/Courses';
import Result from './Pages/Result';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/results" element={<Result/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
