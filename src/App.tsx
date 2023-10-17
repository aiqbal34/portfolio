import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar></Navbar>}>

      </Route>
    </Routes>
      
      </BrowserRouter>
  );
}

export default App;
