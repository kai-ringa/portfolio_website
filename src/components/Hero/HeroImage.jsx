import './HeroImage.css';
import profileImage from './images/profile.jpg';

const HeroImage = () => {
  return <img className="hero-image" src={profileImage} alt="profile" />;
};

export default HeroImage;
