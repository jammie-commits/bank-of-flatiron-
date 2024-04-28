import React, {useState} from 'react';
import TransactionData from './TransactionData';
import './App.css';

function App() {
  const handleTransactions = (data) => {
    console.log(data);  
  };

  const [transactions, setTransactions] = useState([
    // Initial transaction data
  ]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const filteredTransactions = transactions.filter((transaction) =>
  transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
);

// Pass filteredTransactions to TransactionList component
<TransactionList transactions={filteredTransactions} />

  return (
    <div className="App">
     <h1>Transaction Tracker</h1>
      {SearchBar && <SearchBar onSearch={filteredTransactions} />}  {/* Render SearchBar conditionally */}
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionList transactions={transactions} />
      <TransactionData onTransactions={handleTransactions} />
    </div>
  );
}

function TransactionData({ onTransactions }) {
  const transactions = [
  ];

  onTransactions(transactions);  // Call the prop function with data
  return (
    <div> 
  </div>
  )
}

export default App;
