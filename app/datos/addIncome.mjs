import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addIncome } from './actions/financialActions';

const AddIncome = (props) => {
 const [amount, setAmount] = useState('');
 const [description, setDescription] = useState('');
 const [date, setDate] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    props.addIncome({ amount, description, date });
 };

 return (
    <div>
      <h1>Add Income</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
        <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
        <input type="date" onChange={(e) => setDate(e.target.value)} />
        <button type="submit">Add Income</button>
      </form>
    </div>
 );
};

const mapDispatchToProps = {
 addIncome
};

export default connect(null, mapDispatchToProps)(AddIncome);