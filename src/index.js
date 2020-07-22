import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ExpenseTracker from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import About from './About';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={ExpenseTracker} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
