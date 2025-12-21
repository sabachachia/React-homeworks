import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    
    const navigate = useNavigate();
    const clicHandler = () => navigate(-1);
  return (
      <div>
          <h1>not found page</h1>
          <button onClick={clicHandler}>Go Back</button>
    </div>
  )
}