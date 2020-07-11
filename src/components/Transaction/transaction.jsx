import React from 'react';
import TransactionForm from './transaction-form';

const Transaction = () => {
  return (
    <div style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }}>
      <h5>TRANSACTION</h5>
      <hr />
      <TransactionForm />
    </div>
  );
};

export default Transaction;
