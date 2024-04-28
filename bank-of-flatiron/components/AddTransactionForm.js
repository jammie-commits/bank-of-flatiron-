import React, {useState} from 'react'

function AddTransactionForm({ onAddTransaction }) {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTransaction({ date, description, amount });
        // Clear form fields after submission
    };

  return (
    <div>AddTransactionForm</div>
  )
}

export default AddTransactionForm