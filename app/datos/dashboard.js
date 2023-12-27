import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchIncomes, fetchExpenses, fetchInvestments } from './actions/financialActions';

const Dashboard = (props) => {
 const [totalIncome, setTotalIncome] = useState(0);
 const [totalExpense, setTotalExpense] = useState(0);
 const [totalInvestment, setTotalInvestment] = useState(0);

 useEffect(() => {
    // Call Redux action creators to fetch incomes, expenses, and investments
    props.fetchIncomes();
    props.fetchExpenses();
    props.fetchInvestments();
 }, []);

 useEffect(() => {
    // Calculate and set total income, expense, and investment
    setTotalIncome(props.incomes.reduce((sum, income) => sum + income.amount, 0));
    setTotalExpense(props.expenses.reduce((sum, expense) => sum + expense.amount, 0));
    setTotalInvestment(props.investments.reduce((sum, investment) => sum + investment.amount, 0));
 }, [props.incomes, props.expenses, props.investments]);

 return (
    <div>
      <h1>Dashboard</h1>
      <h2>Total Income: {totalIncome}</h2>
      <h2>Total Expense: {totalExpense}</h2>
      <h2>Total Investment: {totalInvestment}</h2>
    </div>
 );
};

const mapStateToProps = (state) => ({
 incomes: state.financial.incomes,
 expenses: state.financial.expenses,
 investments: state.financial.investments
});

const mapDispatchToProps = {
 fetchIncomes,
 fetchExpenses,
 fetchInvestments
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);