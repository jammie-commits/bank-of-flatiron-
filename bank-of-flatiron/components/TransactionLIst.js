import React from 'react'

export default function TransactionLIst() {
  return (
    <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map((transaction) => (
        <tr key={transaction.id}>
          <td>{transaction.date}</td>
          <td>{transaction.description}</td>
          <td>{transaction.amount.toFixed(2)}</td>  // Format amount to 2 decimal places
        </tr>
      ))}
    </tbody>
  </table>
  )
}
