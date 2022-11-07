import * as React from 'react';
import './index.css';
import Typography from '@mui/material/Typography';

import bubble from '../props/bubble.png';
import foto from '../props/foto2.jpg'
import { useStyles } from "./styles";
import axios from "axios";
import {useEffect, useState} from "react";




function Home() {
  const classes = useStyles(); //Dentro da Function
  const [comments, setComments] = useState([]);

async function getComments(){
    try{
        const res = await axios.get('https://testimonialapi.toolcarton.com/api');
        setComments(res.data);
        console.log(res.data);
    }catch(err){
        console.error(err)
    }
}

useEffect(() => {
    getComments();
}, []);


  return (
    
    <div className='principal-container'>
        <div className={classes.container}>
            <div className={classes.content}>
              <h4>Hello, my name is</h4>
              <h1>Rodrigo <span>Mesquita</span></h1>
              <h3>I'am a IT Tech.</h3>
            </div>
            <div className={classes.containerimg}>
              <img className={classes.containerimgimg}src={bubble}></img>
              <img className={classes.containerimgimg2} src={foto}></img>
            </div>
        </div>




        <div class="about">
		<div class="main">
			<div class="about-text">
				<h2>About Me</h2>
				<h5>Student <span>& Developer</span></h5>
				<p>I´m a young man, named Rodrigo Mesquita that lives in Póvoa de Varzim and has 19 yeas old who likes programming, prefers frontend, but can also develop in backend, I have some objectives in life and one of them is work in the web developement. </p>
			</div>
		</div>
	</div>
        


  <section class="testimonial text-center">
        <div class="container">

            <div class="heading white-heading">
                Testimonial
            </div>
            <div id="testimonial4" class="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
             
                <div class="carousel-inner" role="listbox">
                {comments.map((comments) => {
                return (
                  <div class="carousel-item ">
                        <div class="testimonial4_slide">
                            <img src={comments.avatar} class="img-circle img-responsive" />
                            <p>{comments.message} </p>
                            <h4>{comments.name}</h4>
                        </div>
                    </div>
              
                  );
                })}
                    
                   
                </div>
                <a class="carousel-control-prev" href="#testimonial4" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#testimonial4" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    </section>


 
    </div>







 

  );
}

export default Home;
