// import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import '../styles/Header.css';
// import { googleLogout } from '@react-oauth/google';


function Header() {

  let data = localStorage.getItem("image")
  // let name = JSON.parse(localStorage.getItem("user"))
  let dta = localStorage.getItem("Log")

  // console.log(name.given_name);


  return (
    <>
      <div className="head">
        <header>
          <nav>
            <div className="logo">
              <a href="/">
                <img src={logo} alt="Hotel Logo" />
              </a>
              <ul className="nav-links">
                <li><a href="/rooms">Rooms</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>

                {dta ? (
                  <li>  
                    {/* <button className='btn1' onClick={() => { */}
                      {/* localStorage.setItem("cred", false); */}
                      {/* googleLogout(); */}
                    {/* }}> */}

                      <img className='data' src={data} alt="" />
                    {/* </button> */}

                    {/* <span>{name.given_name}</span> */}
                  </li>
                ) : (null)}
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Header;
