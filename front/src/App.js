import './App.css';

import Signup from './components/Signup';
import Login from "./components/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Chart from './components/Chart';
import Table from './components/Table';
import NewdataList from './components/NewdataList/NewdataList';



function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className='container'>
    <Routes>
     <Route exact path="/" element={<NewdataList/>} />
        
        {/* <Route exact path="/" element={<Home/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/login" element={<Login/>} />

        <Route exact path="/chart" element={<Chart/>} />
        <Route exact path="/table" element={<Table/>} /> */}
       
    </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
