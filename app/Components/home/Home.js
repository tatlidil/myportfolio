import React from 'react';
import "./Home.css";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
   <section className='home container' id='home'>
   <div className='intro'>
    <img src= "https://media.licdn.com/dms/image/D5603AQHAMDZS5GUfMw/profile-displayphoto-shrink_200_200/0/1699489895020?e=1724889600&v=beta&t=fS9LtPKj6yfol0fmAb9v0BXJHNmhepLlNWdt2FIOVRM" height={145} width={160} alt='Onur Tatlıdil' className='home__img'/>
    <h1 className='home__name'>Onur Tatlıdil</h1>
    <span className='home__education'>
    MSCS Student & Web Developer
    </span>

    <HeaderSocials/>

    <a href='https://drive.usercontent.google.com/u/0/uc?id=1RTHQWkxhVWzl__ogCAZT8A0sCW08ICD-&export=download' className='btn' download={"Onur's Resume"}>Download Onur's Resume</a>

    <ScrollDown/>
   </div>

   <Shapes/>

   </section> 
  )
}

export default Home;
