import React, { useState } from 'react';
import SearchBar from './SearchBar'; // Assuming SearchBar.js exists
import TransactionList from './TransactionList';
import AddTransactionForm from './AddTransactionForm';

function App() {
  const [searchTerm, setSearchTerm] = useState('');  // Manage search term state

  const handleTransactions = (data) => {
    // Process or store the transaction data here
  };

  return (
    <div className="App">
      <h1>Transaction Tracker</h1>
      <SearchBar onSearch={setSearchTerm} />  {/* Pass setSearchTerm function as prop */}
      <AddTransactionForm onAddTransaction={/* Add transaction logic */} />
      <TransactionList transactions={/* Access and filter transactions based on searchTerm */} />
    </div>
  );
}

export default App;
