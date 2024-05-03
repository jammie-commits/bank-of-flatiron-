import React from "react";
import './App.css';

const AddTransactionForm = ({ formData,handleChange,handleSubmit }) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div class="form-container">
        <div class="form-control">
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
      </div>

      <div class="form-control">
      <label htmlFor="description">Description:</label>
      <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Description"/>
      </div>

      <div class="form-control">
      <label htmlFor="amount">Amount:</label>
      <input type="number" id="amount" value={formData.amount} onChange={handleChange} placeholder="Amount"/>
      </div>

      <div class="form-control">
      <label htmlFor="category">Category:</label>
      <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} placeholder="Category"/>
      </div>
      </div>

      <input type="submit" value="Add Transaction" />
    </form>
    </>
  );
}

export default AddTransactionForm;