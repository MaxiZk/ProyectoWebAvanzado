import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchIncomes, fetchAvailable, fetchInvestments } from './actions/financialActions';

const Dashboard = (props) => {
 const [totalIncome, setTotalIncome] = useState(0);
 const [totalExpense, setTotalAvailable] = useState(0);
 const [totalInvestment, setTotalInvestment] = useState(0);

 useEffect(() => {
    props.fetchIncomes();
    props.fetchAvailable();
    props.fetchInvestments();
 }, []);

 useEffect(() => {
    setTotalIncome(props.incomes.reduce((sum, income) => sum + income.amount, 0));
    setTotalAvailable(props.expenses.reduce((sum, available) => sum + available.amount, 0));
    setTotalInvestment(props.investments.reduce((sum, investment) => sum + investment.amount, 0));
 }, [props.incomes, props.available, props.investments]);

 return (
    <div>
      <h1>Dashboard</h1>
      <h2>Total Income: {totalIncome}</h2>
      <h2>Total available: {totalAvailable}</h2>
      <h2>Total Investment: {totalInvestment}</h2>
    </div>
 );
};

const mapStateToProps = (state) => ({
 incomes: state.financial.incomes,
 available: state.financial.available,
 investments: state.financial.investments
});

const mapDispatchToProps = {
 fetchIncomes,
 fetchAvailable,
 fetchInvestments
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);