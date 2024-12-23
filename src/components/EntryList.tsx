import React from 'react';
import { Entry } from '../types';

type Props = {
  entries: Entry[];
  deleteEntry: (id: string) => void;
};

const EntryList: React.FC<Props> = ({ entries, deleteEntry }) => {
  return (
    <ul>
      {entries.map((entry) => (
        <li key={entry.id}>
          {entry.description} - ${entry.amount} ({entry.type})
          <button onClick={() => deleteEntry(entry.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default EntryList;
