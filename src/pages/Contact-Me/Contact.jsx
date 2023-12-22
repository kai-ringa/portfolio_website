import { FaPhone, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <h2>contact me</h2>
      <div className="contact-info">
        <div className="contact-text">
          <h3>drop me a message</h3>
          <p>
            Feel free to reach out to me! Whether you have a question or just
            want to say hi, I'll get back to you as soon as I can.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <FaPhone className="icons" />
              <span>+254 737 328 482</span>
            </div>
            <div className="contact-detail">
              <FaEnvelope className="icons" />
              <span>ringakai@gmail.com</span>
            </div>
          </div>
        </div>

        <form
          action="https://formspree.io/f/xbjnrpzj"
          method="POST"
          className="contact-form"
        >
          <div className="input-group">
            <input
              className="input"
              name="name"
              type="text"
              required
              autoComplete="off"
              id="name"
            />
            <label className="label" htmlFor="name">
              name
            </label>
          </div>
          <div className="input-group">
            <input
              className="input"
              name="email"
              type="email"
              required
              autoComplete="off"
              id="email"
            />
            <label className="label" htmlFor="email">
              email
            </label>
          </div>
          <div className="input-group">
            <textarea
              className="input"
              name="message"
              type="text"
              required
              autoComplete="off"
              id="message"
              rows={4}
            />
            <label className="label" htmlFor="message">
              message
            </label>
          </div>

          <button type="submit" className="btn">
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
