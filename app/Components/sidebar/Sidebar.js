"use client"
import React, { useState } from 'react';
import "./Sidebar.css";


const Sidebar = () => {

  const [toggle, showMenu] = useState(false);
  return (
   <>
    <aside className={toggle ? "aside show-menu" : "aside"}>
    <a href='#home' className='nav__logo'>
    <img src='https://cdn-icons-png.flaticon.com/512/5016/5016197.png' alt='sideLogo' />
    </a>

    <nav className='nav'>
      <div className='nav__menu'>
      <ul className='nav__list'>
        <li className='nav__item'>

          <a href='#home' className='nav__link'>
             <i className="icon-home"></i>
          </a>
        </li>

        <li className='nav__item'>
          <a href='#about' className='nav__link'>
          <i className="icon-user"></i>
          </a>
        </li>

        <li className='nav__item'>
          <a href='#resume' className='nav__link'>
          <i className="icon-graduation"></i>
          </a>
        </li>

        <li className='nav__item'>
          <a href='#work' className='nav__link'>
          <i className="icon-trophy"></i>
          </a>
        </li>


      </ul>

      </div>
    </nav>

    <div className='nav__footer'>
      <span className='copyright'>&copy; 2024.</span>
      <span className='copyright'> Onur Tatlidil</span>
    </div>

   </aside>


   <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
    <i className='icon-menu'></i>
   </div>
   </>
  );
}

export default Sidebar