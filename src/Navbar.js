import React from 'react'
import { NavLink } from "react-router-dom"


function Navbar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
      >
        <button>Home</button>
      </NavLink>

      <NavLink
        to="/about"
        exact
      >
        <button>About</button>
      </NavLink>

      <NavLink 
        to="/contacts"
        exact
      >
        <button>Contacts</button>
       </NavLink>
       
      <NavLink 
        to="/search"
        exact
      >
        <button>Search</button>
       </NavLink>

       
      
    </div>
  );
}

export default Navbar