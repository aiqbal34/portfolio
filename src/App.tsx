import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Random from './Components/Random';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Random></Random>}/>

    </Routes>
      
      </BrowserRouter>
  );
}

export default App;
