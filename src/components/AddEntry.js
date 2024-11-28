import React, { useState } from "react";
import "./AddEntry.css";

function AddEntry() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("credit");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, amount, type, note });
    // Logic to save the entry
  };

  return (
    <div className="add-entry">
      <h2>Add New Entry</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Person Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Type:</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
        </div>
        <div>
          <label>Note:</label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddEntry;
