import React, { useState } from "react";
import "./App.css";

function App() {
  const [entries, setEntries] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [filterType, setFilterType] = useState(null);

  // Handle form submission
  const addEntry = (entry) => {
    setEntries([...entries, entry]);
    setShowForm(false);
  };

  // Filter entries based on type (credit/debit)
  const filteredEntries = filterType
    ? entries.filter((entry) => entry.type === filterType)
    : entries;

  return (
    <div className="App">
      <h1>Money Tracker</h1>
      <div className="button-container">
        <button onClick={() => setShowForm(true)}>Add Entry</button>
        <button onClick={() => setFilterType("credit")}>
          Credit History Details
        </button>
        <button onClick={() => setFilterType("debit")}>
          Debit History Details
        </button>
      </div>

      {/* Show Balance Table */}
      {entries.length > 0 && (
        <table className="balance-table">
          <thead>
            <tr>
              <th>Person Name</th>
              <th>Balance</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredEntries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.amount}</td>
                <td>{entry.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Show Add Entry Form */}
      {showForm && (
        <EntryForm
          onSubmit={addEntry}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
}

export default App;
