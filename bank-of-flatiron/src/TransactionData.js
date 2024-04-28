import React from "react";

function TransactionData() {
const transactions = [
    { id: 1, date: '2024-04-25', description: 'Grocery Store', amount: -20.50 },
    { id: 2, date: '2024-04-27', description: 'Salary Deposit', amount: 10000.00 },
    { id: 3, date: '2024-04-29', description: 'Loan Debit', amount: 2000.00 },
    { id: 4, date: '2024-04-30', description: 'Locked Savings', amount: 4000.00 },
    { id: 5, date: '2024-04-31', description: 'Car Loan', amount: 3000.00 },
];
return (
    <div>  
      {transactions}  
    </div>
  );
}


export default TransactionData;