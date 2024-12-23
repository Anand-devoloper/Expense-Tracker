import React, { useState } from 'react';
import { Entry } from '../types';

type Props = {
  addEntry: (entry: Entry) => void;
};

const AddEntryForm: React.FC<Props> = ({ addEntry }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState<'income' | 'expense'>('income');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: Entry = {
      id: Math.random().toString(),
      description,
      amount,
      type,
    };
    addEntry(newEntry);
    setDescription('');
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input    
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select value={type} onChange={(e) => setType(e.target.value as 'income' | 'expense')}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default AddEntryForm;
