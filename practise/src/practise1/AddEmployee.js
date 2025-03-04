import React, { useState } from 'react';
import axios from 'axios';

const initialState = {
    name: "",
    address: "",
    dept: "",
    manager:""
};

export const AddEmployee = () => {
   

    const handleChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
        console.log("state is ", state); // Logging updated state
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting state:", state);

        axios.post("http://localhost:5000/api/employees/add", state)
            .then((response) => {
                console.log("Response:", response.data);
               
            })
            
    };
    const [state, setState] = useState(initialState);
    const { name,address, dept,manager} = state;

    return (
        <div>
            <h1>Create a Employee</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className='col-form-label'>Name</label>
                    <input className='form-control' type='text' name="name" value={name} onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label className='col-form-label'>Address</label>
                    <input className='form-control' type='text' name="address" value={address} onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label className='col-form-label'>Department</label>
                    <input className='form-control' type='text' name="dept" value={dept} onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label className='col-form-label'>Manager</label>
                    <input className='form-control' type='text' name="manager" value={manager} onChange={handleChange} required />
                </div>
                <div>
                    <button type='submit' className='btn btn-success'>Add User</button>
                </div>
            </form>
        </div>
    );
};