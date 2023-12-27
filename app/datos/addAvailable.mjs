import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addAvailable } from './actions/financialActions';

const AddAvailable = (props) => {
 const [amount, setAmount] = useState('');
 const [description, setDescription] = useState('');
 const [date, setDate] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    props.addAvailable({ amount, description, date });
 };

 return (
    <div>
      <h1>Add Available</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
        <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
        <input type="date" onChange={(e) => setDate(e.target.value)} />
        <button type="submit">Add Available</button>
      </form>
    </div>
 );
};

const mapDispatchToProps = {
 addAvailable

};

export default connect(null, mapDispatchToProps)(addAvailable);