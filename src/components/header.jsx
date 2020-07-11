import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="text-center">
      <h1 style={{ fontSize: 56, lineHeight: 0.78, marginTop: '1rem' }}>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          Expense <br />
          Tracker
        </Link>
      </h1>
    </div>
  );
};

export default Header;
