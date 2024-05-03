import React, { useState,useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';

import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] =useState({date: "",description: "", category: "", amount: "",});
  const [filter, setFilter] = useState("");

  // fetch data from database
  const fetchTransactionsData = () => {
    fetch("db.json").then((data) => { setTransactions(data)});
    useEffect(() => { fetchTransactionsData();
     }, []);
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({...formData, [name]: value })
  }
   const handleSubmit = (e) => {
    e.preventDefault();

    // post data
    fetch("db.json.transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTransactions([...transactions, data]);
      })
      .catch();
      setFormData({
        date: "",
        description: "",
        category: "",
        amount: "",
      });
    };

    const handleFilter = (e) => {
      setFilter(e.target.value);
    };

    return (
      <div className="App">
        <Header />
        <SearchBar filter={filter} handleFilter={handleFilter} />
        <AddTransactionForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        {/* pass transactions as prop */}
        <TransactionList transactions={transactions} filter={filter} />
      </div>
    );
  };
  
  export default App;

 