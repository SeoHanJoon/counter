import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Link to="/">go to Hook</Link>
      <br />
      <Link to="/redux">go to Redux</Link>
    </>
  );
};

export default Header;
