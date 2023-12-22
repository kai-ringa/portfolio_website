import { FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="details">
        <FaPhone /> +254 737 328 482 | <FaEnvelope /> ringakai@gmail.com
      </div>
      <div>&copy; {currentYear} Victor Ringa Kai | All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
