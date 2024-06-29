import React from 'react';

const HeaderSocials = () => {
  return (
    <div className='home__socials'>
      <a href='https://www.linkedin.com/in/onurtatlidil' className='home__social-link' target='_blank' rel='noopener noreferrer'>
        <i className="fa-brands fa-linkedin"></i>
      </a>

      <a href='https://github.com/tatlidil' className='home__social-link' target='_blank' rel='noopener noreferrer'>
        <i className="fa-brands fa-github"></i>
      </a>

      <a href='https://medium.com/@tatlidil' className='home__social-link' target='_blank' rel='noopener noreferrer'>
        <i className="fa-brands fa-medium"></i>
      </a>

      <a href='https://codepen.io/tatlidil' className='home__social-link' target='_blank' rel='noopener noreferrer'>
        <i className="fa-brands fa-codepen"></i>
      </a>

      <a href='https://codesandbox.io/u/tatlidil' className='home__social-link' target='_blank' rel='noopener noreferrer'>
        <i className="fa-brands fa-code"></i>
      </a>
    </div>
  )
}

export default HeaderSocials;
