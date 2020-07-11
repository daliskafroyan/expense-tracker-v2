import React from 'react';
import HistoryCard from './history-card';
import { useContext } from 'react';
import { GlobalContext } from '../../context/global-context';

const History = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div style={{ marginTop: '2.5rem' }}>
      <h5>HISTORY</h5>
      <hr />
      {transactions.map((transaction) => (
        <HistoryCard key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};

export default History;
