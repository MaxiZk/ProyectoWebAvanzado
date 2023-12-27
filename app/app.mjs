import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './datos/dashboard';
import AddIncome from './datos/addIncome.mjs';
import AddExpense from './datos/addAvailable.mjs';
import AddInvestment from './datos/addInvestment.mjs';

function App() {
return (
    <Router>
      <Switch>
        <Route exact path="/app/datos/dashboard.js" component={Dashboard} />
        <Route path="/app/datos/addIncome.js" component={AddIncome} />
        <Route path="/app/datos/addExpense.js" component={AddExpense} />
        <Route path="/app/datos/addInvestment.js" component={AddInvestment} />
      </Switch>
    </Router>
);
}

export default App;