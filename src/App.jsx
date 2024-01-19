import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import President from "./components/President/President";
import Images from "./components/Meram/Images";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Project from "./components/Mega/Project";
import Home from "./components/Home/Home";
import History from "./components/About/History";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/baskan" element={<President />} />
        <Route path="/meram-tarihce" element={<History />} />
        <Route path="/meram" element={<Images />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/mega" element={<Project />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
