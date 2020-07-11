import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../context/global-context';

const HistoryCard = (props) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = props.transaction.amount < 0 ? '-' : '';
  return (
    <div
      className={`card ${props.transaction.amount < 0 ? 'min' : 'plus'}`}
      style={{
        boxShadow: '0 20px 40px rgba(238, 77, 71, 0.1)',
        border: 'none',
        padding: '12px',
        marginTop: '12px',
      }}
      onClick={() => deleteTransaction(props.transaction.id)}
    >
      <h3>{props.transaction.description}</h3>
      <div>{`${sign}Rp ${Math.abs(props.transaction.amount)}`}</div>
    </div>
  );
};

export default HistoryCard;
