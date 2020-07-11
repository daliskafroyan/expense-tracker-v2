import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/global-context';
import { v4 as uuid } from 'uuid';

const TransactionForm = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: uuid(),
      description,
      amount: parseInt(amount),
    });
    setDescription('');
    setAmount(0);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="write your description here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Description</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            placeholder="write your amount here"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          style={{
            width: '100%',
            background: '#EE4D47',
            border: 'none',
            borderRadius: '5px',
            padding: '7px',
          }}
          type="submit"
        >
          <span className="button-transaction"> ADD TRANSACTION</span>
        </button>
      </form>
    </>
  );
};

export default TransactionForm;
