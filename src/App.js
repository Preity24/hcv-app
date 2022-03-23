import { Routes, Route } from "react-router-dom"
import Header from './components/Header/Header';
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Footer from "./components/Footer/Footer";


import './App.css';
import React from "react";


function App() {
  return (
      <main className="App">
        <Header />
        <Routes>
          <Route path="/" element={ <Login/> } />
          <Route path="home" element={ <Home/> } />
        </Routes>
        <Footer />
    </main>
  );
}

export default App;
