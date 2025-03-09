import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import RegisterPage from "./pages/register";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<EventDetails />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <EventDetails/>
      <Footer/>
    </Router>
  )
}

export default App
