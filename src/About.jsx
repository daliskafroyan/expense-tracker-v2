import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div
      className="container d-flex justify-content-center"
      style={{ marginTop: '60px' }}
    >
      <div
        className="card d-flex align-items-center"
        style={{
          boxShadow: '0 20px 40px rgba(238, 77, 71, 0.2)',
          padding: '1rem 2rem',
          border: 'none',
          marginTop: '2rem',
        }}
      >
        <h4>About</h4>
        <p>This app were created as requirement of React Bootcamp</p>
      </div>

      <Link to="/" style={{ color: '#ffffff', textDecoration: 'none' }}>
        <h5>back</h5>
      </Link>
    </div>
  );
};

export default About;
