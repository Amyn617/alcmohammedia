import React from "react";
import { LanguageProvider } from "./components/LanguageContext";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import EnglishProgram from "./pages/EnglishProgram";
import FrenchProgram from "./pages/FrenchProgram";
import Join from "./pages/Join";
import Registration from "./pages/Registration";
import Clubs from "./pages/Clubs";
// NotFound component for better UX
import NotFound from "./pages/NotFound"; // Ensure this component exists

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          {/* Ensure paths are correctly defined */}
          <Route path="/" element={<Home />} />  {/* Default Home route */}
          <Route path="/home" element={<Home />} />  {/* Optional: You can keep or remove this */}
          <Route path="/english-program" element={<EnglishProgram />} />
          <Route path="/french-program" element={<FrenchProgram />} />
          <Route path="/join" element={<Join />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all for unmatched routes */}
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;
