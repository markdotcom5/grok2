import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Welcome to StelTrek</h1>
        <p>Your gateway to space exploration</p>
        <a href="#learn-more" className="btn-primary">Learn More</a>
      </div>
    </div>
  );
};

export default HomePage;

