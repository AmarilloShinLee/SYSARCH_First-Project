import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import NavBar from "./components/Navbar";

import Home from "./pages/Homepage";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import TermsOfService from "./pages/TermsOfService";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Registration" element={<Registration/>}></Route>
        <Route path="/TermsOfService" element={<TermsOfService/>}></Route>
      </Routes>
    </>
  );
}

export default App;
