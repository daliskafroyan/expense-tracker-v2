import React, { createContext, useReducer, useEffect } from 'react';
import { GlobalReducer } from '../reducers/global-reducer';

// initial state
const initState = {
  transactions: [],
};

// global context
export const GlobalContext = createContext(initState);

// provider component
const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(GlobalReducer, initState, () => {
    const localData = localStorage.getItem('state');
    return localData ? JSON.parse(localData) : { transactions: [] };
  });

  // actions
  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  };

  // set local state
  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  return (
    <div>
      <GlobalContext.Provider
        value={{
          transactions: state.transactions,
          deleteTransaction,
          addTransaction,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    </div>
  );
};

export default GlobalContextProvider;
