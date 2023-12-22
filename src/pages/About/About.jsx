import './About.css';
import AboutImage from './AboutImage';

const About = () => {
  return (
    <div className="about" id="about">
      <h2>about me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I am a passionate front-end engineer with a background in
            procurement and supply chain management. After discovering my
            interest in technology through my work with Oracle Materials Control
            Software, I took time away from work and tasked myself with learning
            web development. As it stands I have learned about the programming
            languages stated below. I am committed to continuous learning and
            excited about the opportunity to contribute my technical expertise
            to a dynamic and innovative team.My skills have been showcased in
            the projects I have undertaken.
          </p>
        </div>
        <AboutImage />
      </div>
    </div>
  );
};

export default About;
