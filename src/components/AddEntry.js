import React from 'react';
import './AddEntry.css'; 


const AddEntry = () => {
  return (
    <div className="addEntry">
      <h2>Add Entry</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" />
        </div>
        <div>
          <label htmlFor="type">Type</label>
          <select id="type">
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
        </div>
        <div>
          <label htmlFor="note">Note</label>
          <textarea id="note"></textarea>
        </div>
        <button type="submit">Save Entry</button>
      </form>
    </div>
  );
};

export default AddEntry;
