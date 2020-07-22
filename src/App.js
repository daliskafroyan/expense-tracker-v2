import React from 'react';
import Header from './components/header';
import TotalBalance from './components/total-balance';
import MoneyFlow from './components/MoneyFlow/money-flow';
import History from './components/History/history';
import Transaction from './components/Transaction/transaction';
import GlobalContextProvider from './context/global-context';
import AboutLink from './components/Footer/about-link';

function ExpenseTracker() {
  return (
    <div className="container" style={{ maxWidth: '375px' }}>
      <GlobalContextProvider>
        <Header />
        <TotalBalance />
        <MoneyFlow />
        <History />
        <Transaction />
        <AboutLink />
      </GlobalContextProvider>
    </div>
  );
}

export default ExpenseTracker;
