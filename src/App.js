import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddEntry from "./components/AddEntry";
import CreditHistory from "./components/CreditHistory";
import DebitHistory from "./components/DebitHistory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-entry" element={<AddEntry />} />
        <Route path="/credit-history" element={<CreditHistory />} />
        <Route path="/debit-history" element={<DebitHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
