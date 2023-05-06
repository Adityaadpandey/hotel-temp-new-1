import React from "react";
import "../styles/Footer.css";
import { googleLogout } from '@react-oauth/google';


const Footer = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
  }

  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>My Hotel</h4>
              <p>123 Main St</p>
              <p>Anytown, India</p>
              <p>Phone: 0542-123478</p>
            </div>
            <div className="col">
              <h4>Explore</h4>
              <ul>
                <li>
                  <a href="/rooms">Rooms</a>
                </li>
                <li>
                  <a href="/location">Location</a>
                </li>
                <li>
                  <a href="/">Amenities</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="/">Facebook</a>
                </li>
                <li>
                  <a href="/">Twitter</a>
                </li>
                <li>
                  <a href="/">Instagram</a>
                </li>
                <li>
                  <a href="/">LinkedIn</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Subscribe</h4>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          {/* <hr> */}
          <p>&copy; 2023 My Hotel. All rights reserved.</p>
        </div>
        <button onClick={() => {
          localStorage.setItem("cred", false);
          googleLogout();
        }}>Logout</button>

      </footer>
    </>
  );
};

export default Footer;
