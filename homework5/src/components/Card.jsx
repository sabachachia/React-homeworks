import React from "react"
import { useNavigate } from "react-router-dom"

export default function Card({ uni }) {
    const navigate = useNavigate();
    const redirectHandler = () => {
        navigate(`/details/${uni.domains[0]}`)
    }
    return <div className="card">
        <h3 className="title">{uni.name}</h3>
        <p className="text">Country: {uni.country}</p>
        <p className="text">Code: {uni.alpha_two_code}</p>
        <p className="text">Domain: {uni.domains[0]}</p>
        <a href={uni.web_pages[0]} className="link" target="_blank">Visit Website</a>
        <button onClick={redirectHandler}>details</button>
    </div>
}