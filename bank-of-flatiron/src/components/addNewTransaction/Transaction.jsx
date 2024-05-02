import React from "react";
import styles from "./addNewTransaction.module.css";

const AddNewTransaction = ({ formData, handleChange, handleFormSubmit }) => {
  // Destructure props for cleaner syntax
  const { date, description, category, amount } = formData;

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <fieldset className={styles.formControlsContainer}>
        <legend>Transaction Details</legend>
        <div className={styles.formControl}>
          <label htmlFor="date">Date:</label>
          <input
            value={date}
            onChange={handleChange}
            type="date"
            id="date"
            name="date"
          />
        </div>

        <div className={styles.formControl}>
          <label htmlFor="description">Description:</label>
          <input
            value={description}
            onChange={handleChange}
            type="text"
            id="description"
            name="description"
            placeholder="Enter a description"
          />
        </div>

        <div className={styles.formControl}>
          <label htmlFor="category">Category:</label>
          <input
            value={category}
            onChange={handleChange}
            type="text"
            id="category"
            name="category"
            placeholder="Enter a category"
          />
        </div>

        <div className={styles.formControl}>
          <label htmlFor="amount">Amount:</label>
          <input
            value={amount}
            onChange={handleChange}
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter amount"
          />
        </div>
      </fieldset>

      <input type="submit" value="Add Transaction" />
    </form>
  );
};

export default AddNewTransaction;
