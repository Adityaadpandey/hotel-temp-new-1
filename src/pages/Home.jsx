import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import hero1 from "../assets/hero.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import "../styles/Home.css";

function Home() {
  const [heroImage, setHeroImage] = useState(hero1);

  useEffect(() => {
    const timer = setTimeout(() => {
      switch (heroImage) {
        case hero1:
          setHeroImage(hero2);
          break;
        case hero2:
          setHeroImage(hero3);
          break;
        case hero3:
          setHeroImage(hero1);
          break;
        default:
          setHeroImage(hero1);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [heroImage]);

  return (
    <div className="home">
      <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-text">
          <h1>Welcome to the Hotel</h1>
          <p>Experience luxury in the heart of the city</p>
          <Link to="/rooms" className="button-primary">
            View Rooms
          </Link>
        </div>
      </div>
      <div className="features">
        <div className="feature">
          <i className="fas fa-wifi"></i>
          <h2>Free Wi-Fi</h2>
          <p>Stay connected with complimentary high-speed internet access</p>
        </div>
        <div className="feature">
          <i className="fas fa-utensils"></i>
          <h2>Dining</h2>
          <p>Indulge in delicious cuisine at our on-site restaurant</p>
        </div>
        <div className="feature">
          <i className="fas fa-spa"></i>
          <h2>Spa</h2>
          <p>Relax and enjoy with a range of spa services</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
