import * as React from 'react';
import './index.css';





function Navbar() {
  return (
  <div className='Navbar'>
    <div className='Navbar-content'>
      <a href='/' className='Navbar-button'>Home</a>
      <a href='/Journey' className='Navbar-button'>Journey</a>
      <a href='/Interests'className='Navbar-button'>Interests</a>
      <a href='/Contact'className='Navbar-button'>Contact</a>
   </div>
  </div>
  );
}

export default Navbar;
