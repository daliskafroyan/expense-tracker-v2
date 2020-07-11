import React, { useContext } from 'react';
import { GlobalContext } from '../../context/global-context';

const OutcomeBox = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const outcome = amounts
    .filter((amount) => amount < 0)
    .reduce((total, amount) => (total += amount), 0)
    .toFixed(1);

  return (
    <div
      className="card d-flex align-items-center"
      style={{
        boxShadow: '0 20px 40px rgba(238, 77, 71, 0.1)',
        padding: '20px',
        border: 'none',
        marginTop: '0.5rem',
        width: '49%',
      }}
    >
      <h4>OUTCOME</h4>
      <h2>
        <span className="income-outcome-number">Rp {Math.abs(outcome)}</span>
      </h2>
    </div>
  );
};

export default OutcomeBox;
