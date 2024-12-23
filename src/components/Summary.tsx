import React from 'react';
import { Entry } from '../types';

type Props = {
  entries: Entry[];
};

const Summary: React.FC<Props> = ({ entries }) => {
  const totalIncome = entries
    .filter((entry) => entry.type === 'income')
    .reduce((acc, entry) => acc + entry.amount, 0);

  const totalExpense = entries
    .filter((entry) => entry.type === 'expense')
    .reduce((acc, entry) => acc + entry.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div>
      <h2>Summary</h2>
      <p>Total Income: ${totalIncome}</p>
      <p>Total Expense: ${totalExpense}</p>
      <p>Balance: ${balance}</p>
    </div>
  );
};

export default Summary;
