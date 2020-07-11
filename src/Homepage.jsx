import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div
      className="container d-flex justify-content-center"
      style={{ marginTop: '60px' }}
    >
      <button
        style={{
          width: '375px',
          background: '#EE4D47',
          border: 'none',
          borderRadius: '5px',
          padding: '7px',
        }}
      >
        <Link
          to="/expense-tracker"
          style={{ color: '#ffffff', textDecoration: 'none' }}
        >
          Expense Tracker App
        </Link>
      </button>
    </div>
  );
};

export default Homepage;
