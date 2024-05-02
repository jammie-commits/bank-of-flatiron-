function AddTransactionForm({ onAddTransaction }) {
  const [date, setDate] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [amount, setAmount] = React.useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction({ date, description, amount });
    // Clear form fields after submission (optional)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <label htmlFor="description">Description:</label>
      <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <label htmlFor="amount">Amount:</label>
      <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button type="submit">Add Transaction</button>
    </form>
  );
}
