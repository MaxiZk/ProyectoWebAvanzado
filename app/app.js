import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddIncome from './components/AddIncome';
import AddExpense from './components/AddExpense';
import AddInvestment from './components/AddInvestment';

function App() {
 return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/add-income" component={AddIncome} />
        <Route path="/add-expense" component={AddExpense} />
        <Route path="/add-investment" component={AddInvestment} />
      </Switch>
    </Router>
 );
}

export default App;