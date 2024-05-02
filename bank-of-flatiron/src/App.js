import React, { useState } from 'react';
import SearchBar from '../src/components/SearchBar';
import TransactionList from '../src/components/TransactionList';
import AddTransactionForm from '../src/components/AddTransactionForm';

import './App.css';

function App() {
  const [transactions, setTransactions] = useState([
    // Initial transaction data
  ]);
  const [searchTerm, setSearchTerm] = useState(''); // State variable for search term

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm.toLowerCase()); // Update search term in lowercase
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="App">
      <h1>Transaction Tracker</h1>
      <SearchBar onSearch={handleSearch} />  {/* Pass handleSearch function as prop */}
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionList transactions={filteredTransactions} />
      {/* Commented out for now: <TransactionData onTransactions={handleTransactions} /> */}
    </div>
  );
}

export default App;
