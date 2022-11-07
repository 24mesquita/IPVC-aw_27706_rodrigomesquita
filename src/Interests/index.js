import * as React from 'react';
import './index.css';
import { useStyles } from "./styles";
import img from '../props/Foto.jpeg';
import develop from '../props/web-develoment.jpeg';




function Home() {
  const classes = useStyles(); //Dentro da Function
  return (
    <div>
          
    <div id='home' className='container home-container'>
    <h1 className='qualifications'>Qualifications</h1>
    <div className='logo'>
      <div className='hover-show '>
        <span className='circle'></span>
        <span className='circle'></span>
        <span className='circle'></span>
        <span className='circle'></span>
        <span className='circle'></span>
        <span className='circle'></span>
        <span className='circle'></span>
        <span className='circle'></span>
      </div>

      <img src={img} alt='' />
    </div>
    
  </div>
  <div  className='interest-container2'><div className='interest-title'>Developement</div>
        <h4 className='interest-description'>Develop, principaly web Developement is one of the things that I love to do. </h4>
        <img  className='interest-img' src={develop}></img>

  </div>
      <div className='interest-container'><div className='interest-title'>Gym</div>
      <h4 className='interest-description'>This is what saved my life, since I discovered the Gym, I got a new lifestyle, I started to feel my self better and my confidence its better like never happened, for about 2 years that I'm in love with lifting weights. </h4>
      
      </div>
      <div className='interest-container2'> <div className='interest-title'>Horse Riding</div>
      <h4 className='interest-description'>Since I was a kid I love horses, I had my first horse at 7 yeas old, and I started riding at the same age, thats pure therapy, its only you and the connection with the horse. </h4>
      
      </div>
      <div className='interest-container'> <div className='interest-title'>Hang out with friends</div>
      
      
      
      </div>
      <div className='interest-container2'> <div className='interest-title'>Travel</div> 
      
      
      </div>
	</div>


		




  );
}

export default Home;
