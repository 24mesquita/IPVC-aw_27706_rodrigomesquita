import * as React from 'react';
import './index.css';
import InstagramIcon from '@mui/icons-material/Instagram';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedinIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
  <div className='Footer'>
    <div className='social-media'>
      <div className='social-media-icon-container'>
          <InstagramIcon sx={{height:'40px', width:'40px'}}className='social-media-icon'   onClick={URL='www.google.com'}/>
      </div>

        <div className='social-media-icon-container' >
          <FacebookIcon sx={{height:'40px', width:'40px'}}
          className='social-media-icon' />
        </div>
        <div className='social-media-icon-container'>
        <LinkedinIcon  sx={{height:'40px', width:'40px'}}className='social-media-icon' />
        </div>
    </div>

        <h3 className='navigation'>Navigation</h3>
        <div className='listed-menu'>
        <li className='listed-menu-item'>Home</li>
        <li className='listed-menu-item'>Percurso</li>
        <li className='listed-menu-item'>Interesses</li>
        <li className='listed-menu-item'>Contactos</li>
        </div>


  </div>
  );
}

export default Footer;