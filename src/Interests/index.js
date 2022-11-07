import * as React from 'react';
import './index.css';
import { useStyles } from "./styles";
import img from '../props/Foto.jpeg';
import develop from '../props/web-devlopement.jpeg';
import gym from '../props/gym.jpeg';
import horse from '../props/horse.jpeg';




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
    <div className='interests'>
      <div className='interests-title'>
        Interests
      </div>
      <div>
      <div className='interests-content'>
            <div className='imterests-container-img'><img className='imterests-img'src={develop}></img></div>
            <div className='interests-text'>
                <div className='interests-text-title'>
                  <h1>Developement</h1>
                </div>
                <div className='interests-text-description'>
                    <p>Develop, principaly web Developement is one of the things that I love to do.</p>
                </div>
            </div>
      </div>

      <div>
      <div className='interests-content'>
            <div className='imterests-container-img'><img className='imterests-img'src={gym}></img></div>
            <div className='interests-text'>
                <div className='interests-text-title'>
                  <h1>Gym</h1>
                </div>
                <div className='interests-text-description'>
                    <p>This is what saved my life, since I discovered the Gym, I got a new lifestyle, I started to feel my self better and my confidence its better like never happened, for about 2 years that I'm in love with lifting weights.</p>
                </div>
            </div>
      </div>
    </div>

    <div>
      <div className='interests-content'>
            <div className='imterests-container-img'><img className='imterests-img'src={horse}></img></div>
            <div className='interests-text'>
                <div className='interests-text-title'>
                  <h1>Horse Riding</h1>
                </div>
                <div className='interests-text-description'>
                    <p>Since I was a kid I love horses, I had my first horse at 7 yeas old, and I started riding at the same age, thats pure therapy, its only you and the connection with the horse.</p>
                </div>
            </div>
      </div>
    </div>





            


        </div>



       

    </div>
    </div>
      




		




  );
}

export default Home;
