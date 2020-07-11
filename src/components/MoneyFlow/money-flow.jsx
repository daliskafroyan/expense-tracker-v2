import React from 'react';
import IncomeBox from './income-box';
import OutcomeBox from './outcome-box';

const MoneyFlow = () => {
  return (
    <div className="d-flex justify-content-between">
      <IncomeBox />
      <OutcomeBox />
    </div>
  );
};

export default MoneyFlow;
