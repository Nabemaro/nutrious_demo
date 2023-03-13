import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="title-section">
        <div className="slogan-container">
          <h1 className="landing-title">Nutrious.io</h1>
          <h2 className="slogan">The best way to track your calories.</h2>
        </div>
      </div>
      <div className="function-section">
        <div className="login-section">
          <Link to="/login" className="login-btn">
            <span>Login</span>
          </Link>
        </div>
        <div className="links-section">
          <Link to="/mealCreator" className="main-menu-btn">
            <span>Calorie Calculator</span>
          </Link>
          <Link to="/" className="main-menu-btn">
            <span>Recipe Recommendations</span>
          </Link>
          <Link to="/" className="main-menu-btn">
            <span>Meal History</span>
          </Link>
        </div>
        <div className="footer">
          <p className="copyright">
            © Nutrious.io 2023 <br /> All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
