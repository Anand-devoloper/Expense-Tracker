import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Entry } from '../types';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

type Props = {
  entries: Entry[];
};

const Chart: React.FC<Props> = ({ entries }) => {
  const monthlyData = entries.reduce((acc, entry) => {
    const month = new Date().toLocaleString('default', { month: 'short' });
    acc[month] = (acc[month] || 0) + (entry.type === 'income' ? entry.amount : -entry.amount);
    return acc;
  }, {} as Record<string, number>);

  const data = {
    labels: Object.keys(monthlyData),
    datasets: [
      {
        label: 'Net Balance',
        data: Object.values(monthlyData),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data} />;
};

export default Chart;
