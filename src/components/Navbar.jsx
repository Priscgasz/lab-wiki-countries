import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-dark bg-primary mb-3">
      <div class="container">
        <NavLink className="navbar-brand" to="/">
          WikiCountries
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar
