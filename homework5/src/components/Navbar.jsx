import React from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { routes } from '../constants/routes';

export default function Navbar() {
  const navigate = useNavigate();
  return (
      <header>
          <nav>
              <button onClick={() => navigate(routes.Home)}>Home</button>
              <button onClick={() => navigate(routes.Unis)}>Unis</button>
          </nav>
    </header>
  )
}