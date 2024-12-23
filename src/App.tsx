import React, { useState } from 'react';
import AddEntryForm from './components/AddEntryForm';
import EntryList from './components/EntryList';
import Summary from './components/Summary';
import Chart from './components/Chart';
import { Entry } from './types';
import './App.css'; 

const App: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([]);

  // Add new entry
  const addEntry = (entry: Entry) => {
    setEntries((prevEntries) => [...prevEntries, entry]);
  };

  // Delete an entry by ID
  const deleteEntry = (id: string) => {
    setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
  };

  return (
    <div className="App" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Income & Expense Tracker</h1>

      {/* Form to add entries */}
      <AddEntryForm addEntry={addEntry} />

      {/* Summary section */}
      <Summary entries={entries} />

      {/* Chart for visualizing trends */}
      <Chart entries={entries} />

      {/* List of all entries */}
      <EntryList entries={entries} deleteEntry={deleteEntry} />
    </div>
  );
};

export default App;
