import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ExpenseTracker from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Homepage from './Homepage';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Homepage} />
      <Route path="/expense-tracker" component={ExpenseTracker} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
