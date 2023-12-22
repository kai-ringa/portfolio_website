import { useEffect, useRef, useState } from 'react';
import './Header.css';
import { CgWebsite } from 'react-icons/cg';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { FaBarsStaggered } from 'react-icons/fa6';
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const navbarRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const closeLinks = () => {
    setShowLinks(false);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  const scrollToTop = () => {
    const navbarHeight = navbarRef.current.clientHeight;

    console.log('Navbar Height:', navbarHeight);
    scroll.scrollToTop({
      duration: 200,
      smooth: true,
      offset: -navbarHeight,
    });
    setShowLinks(false);
  };

  return (
    <nav ref={navbarRef}>
      <div className="nav-center">
        <div className="nav-header">
          <div className="logo">
            <span style={{ marginRight: '0.5rem' }}>
              <CgWebsite />
            </span>
            Portfolio
          </div>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBarsStaggered />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            <li>
              <Link className="link" to="hero" onClick={scrollToTop}>
                Home
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to="about"
                smooth={true}
                duration={200}
                onClick={closeLinks}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to="technologies"
                smooth={true}
                duration={200}
                onClick={closeLinks}
              >
                Technologies
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to="projects"
                smooth={true}
                duration={200}
                onClick={closeLinks}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <ul className="social-icons">
          <li>
            <a
              href="https://github.com/kai-ringa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/victor-kai-7ab60a17b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
