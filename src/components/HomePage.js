import React from "react";
import './HomePage.css';
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <h1>Money Tracker</h1>
      <div className="buttoncontainer1">
        <button onClick={() => navigate("/add-entry")}>Add Entry</button>
        <button onClick={() => navigate("/credit-history")}>
          Credit History Details
        </button>
        <button onClick={() => navigate("/debit-history")}>
          Debit History Details
        </button>
      </div>
    </div>
  );
}

export default HomePage;
