import React from 'react';
import "./About.css";
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className='section__title'>
        About Me
      </h2>

      <div className='about__container grid'>
        <img src="https://cdn-icons-png.flaticon.com/512/5016/5016197.png" alt='About me' className='about__img'/>

        <div className='about__data'>
          <div className='about__info'>
            <p className='about__description'>
            My journey began with a Bachelor's in Geological Engineering from Istanbul Technical University, where I developed analytical and problem-solving skills. Transitioning to tech, I pursued further education and gained practical experience in modern web technologies like HTML, CSS, JavaScript, React, and Next.js. I have diverse experience in IT, consultancy, and web development in both the USA and Turkey. My goal is to create impactful, user-centric applications and continuously seek opportunities to collaborate on exciting projects. Feel free to reach out if you're looking for a dedicated and skilled developer!</p>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
}

export default About;
