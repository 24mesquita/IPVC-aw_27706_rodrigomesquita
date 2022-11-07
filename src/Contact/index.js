import * as React from 'react';
import './index.css';





function Navbar() {
  return (
    <div className='contact-container'>
      <form   action="https://formbold.com/s/6MwL3"
        method="POST">      
        <input name="name" type="text" class="feedback-input" placeholder="Name" />   
        <input name="email" type="text" class="feedback-input" placeholder="Email" />
        <textarea name="message" class="feedback-input" placeholder="Comment"></textarea>
        <input type="submit" value="SUBMIT"/>
      </form>
    </div>

  );
}

export default Navbar;
