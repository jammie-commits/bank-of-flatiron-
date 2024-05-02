import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Search from "./components/search/SearchBar";
import Table from "./components/table/Transactiontable";
import AddNewTransaction from "./components/addNewTransaction/Transaction";

const App = () => {
  // maintain all states
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  const [filter, setFilter] = useState("");

  const fetchTransactions = () => {
    fetch("http://localhost:3000/transactions")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // update state
        setTransactions(data);

        setTimeout(() => {
          setIsLoading(false);
        }, 1);
      })
      .catch((err) => {
        // fetch error
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // !handling input change
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // updating formData using dynamic object properties
    setFormData({ ...formData, [name]: value });
  };

  
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // POST transaction
    fetch("http://localhost:8000/transactions", {
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
      <Search filter={filter} handleFilter={handleFilter} />
      <AddNewTransaction
        formData={formData}
        handleChange={handleChange}
        handleFormSubmit={handleFormSubmit}
      />
     
      <Table transactions={transactions} filter={filter} />
    </div>
  );
};

export default App;