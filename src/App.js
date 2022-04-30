import { Routes, Route } from "react-router-dom"
import Header from './components/Header/Header';
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Footer from "./components/Footer/Footer";
import OpportunityDetails from "./components/OpportunityDetails/OpportunityDetails";
import AddOpportunity from "./components/AddOpportunity/AddOpportunity";
import About from "./components/About/About";
import './App.css';
import React from "react";
import EditOpportunity from "./components/EditOpportunity/EditOpportunity";


function App() {
  return (
      <main className="App">
        <Header />
        <Routes>
          <Route path="/" element={ <Login/> } />
          <Route path="home" element={ <Home/> } />
          <Route path="about" element={ <About/> } />
          <Route path='details/:id' element={<OpportunityDetails/>} />
          <Route path='addOpportunity' element={<AddOpportunity/>} />
          <Route path='editOpportunity/:id' element={<EditOpportunity/>} />
        </Routes>
        <Footer />
    </main>
  );
}

export default App;
