import React, { useContext } from 'react';
import { GlobalContext } from '../context/global-context';

const TotalBalance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount
    .reduce((total, number) => (total += number), 0)
    .toFixed(1);
  return (
    <div
      className="card d-flex align-items-center"
      style={{
        boxShadow: '0 20px 40px rgba(238, 77, 71, 0.2)',
        padding: '1rem 2rem',
        border: 'none',
        marginTop: '2rem',
      }}
    >
      <h4>TOTAL BALANCE</h4>
      <h2>Rp {total}</h2>
    </div>
  );
};

export default TotalBalance;
