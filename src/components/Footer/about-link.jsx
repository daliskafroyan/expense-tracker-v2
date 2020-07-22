import React from 'react';
import { Link } from 'react-router-dom';

const AboutLink = () => {
  return (
    <div className={'text-center'}>
      <Link to="/about">
        <h5>about</h5>
      </Link>
    </div>
  );
};

export default AboutLink;
