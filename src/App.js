import React from "react";
import "./App.css";
import { LanguageProvider } from "./components/LanguageContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EnglishProgram from "./pages/EnglishProgram";
import FrenchProgram from "./pages/FrenchProgram";
import Join from "./pages/Join";
import Registration from "./pages/Registration";
import Clubs from "./pages/Clubs";

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/EnglishProgram" element={<EnglishProgram />} />
          <Route path="/FrenchProgram" element={<FrenchProgram />} />
          <Route path="/Join" element={<Join />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Clubs" element={<Clubs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;
