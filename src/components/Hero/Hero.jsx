import HeroImage from './HeroImage';
import './Hero.css';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="hero-content">
        <div>
          <h1>Victor Ringa Kai</h1>
          <div className="line"></div>
          <p>Results-oriented Web Developer with 2 years of experience.</p>
          <button className="btn-hero">
            <Link to="contact" smooth={true} duration={200}>
              contact me
            </Link>
          </button>
        </div>
        <div>
          <HeroImage />
        </div>
        <div className="introduction">
          <h3>introduction</h3>
          <h2>front-end web developer</h2>
          <p>
            Experience in JavaScript, React, Redux, CSS, Bootstrap and PHP.
            Proven expertise intricacies, security, session management and best
            development practices.
          </p>
          <h3>learn more</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
