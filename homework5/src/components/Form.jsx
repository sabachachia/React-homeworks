import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { routes } from '../constants/routes';

export default function Form() {
    const navigate = useNavigate()
    const [country, setcountry] = useState("")
    const submitHandler = (e) => {
        e.preventDefault();
        if (!country) return;
        navigate(`${routes.Unis}/${encodeURIComponent(country)}`)
        console.log(`Submitted: ${country}`);
        
    }
    const userHandler = (e) => {
        setcountry(e.target.value);
    }
    return <form onSubmit={submitHandler}>
        <label htmlFor="">Filter by the country</label>
        <input type="text" placeholder='Enter prefered country' value={country} onChange={userHandler} />
        <button type='submit'>submit</button>
  </form>
}