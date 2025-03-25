import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from "/logo.png"
import phone from "../assets/imgs/icons/phone.svg";

export function AppHeader() {
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActive, setIsActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleResize();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 775);
  };

  const handleLinkClick = (link) => {
    setIsActive(link);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOverlayClick = () => {
    setMenuOpen(false);
  };

  return (
    <section className={`app-header full ${isScrolled ? 'scrolled' : ''}`}>
      {!isMobile &&
        <section>
          <section className="app-header-content">
            <section className="header-contact">
              <Link to="/" onClick={() => { handleLinkClick(null); toggleMenu() }}>
                <section className="logo">
                  <img src={logo} alt="logo" />
                </section>
              </Link>
              <h1>גינת תמר</h1>
              <section className="header-call">
                <a href="tel:02-6710335"><img src={phone} alt="phone" /></a>
                <a href="tel:02-6710335"><p>02-6710335</p></a>
              </section>
            </section>
          </section>
          <hr />

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#connect" onClick={() => { handleLinkClick(null); toggleMenu() }}>דרכי התקשרות</a>
            <Link to="/gallery" onClick={() => { handleLinkClick("gallery"); toggleMenu() }} className={isActive === "gallery" ? "active" : ""}>גלריה</Link>
            <Link to="/crystal" onClick={() => { handleLinkClick("crystal"); toggleMenu() }} className={isActive === "crystal" ? "active" : ""}>קריסטלים</Link>
            <Link to="/categories" onClick={() => { handleLinkClick("categories"); toggleMenu() }} className={isActive === "categories" ? "active" : ""}>צמחים</Link>
            <Link to="/about" onClick={() => { handleLinkClick("about"); toggleMenu() }} className={isActive === "about" ? "active" : ""}>קצת עלינו</Link>
            <Link to="/" onClick={() => { handleLinkClick(null); toggleMenu() }}>בית</Link>
          </nav>
        </section>
      }

      {isMobile && (
        <section className="app-header-mobile">
          <section className="app-header-mobile-logo">
            <Link to="/" onClick={() => { handleLinkClick(null); menuOpen && toggleMenu() }}>
              <section className="logo">
                <img src={logo} alt="logo" />
              </section>
            </Link>
            <section className="header-call">
              <a href="tel:02-6710335"><img src={phone} alt="phone" /></a>
              <a href="tel:02-6710335"><p>02-6710335</p></a>
            </section>
          </section>

          <section>
            <button
              className="hamburger-icon"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={toggleMenu}
            >
              <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
              <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
              <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
            </button>

            {menuOpen && (
              <div className="menu-overlay" onClick={handleOverlayClick}></div>
            )}

            <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
              <Link to="/" onClick={() => { handleLinkClick(null); toggleMenu() }}>בית</Link>
              <Link to="/about" onClick={() => { handleLinkClick("about"); toggleMenu() }} className={isActive === "about" ? "active" : ""}>קצת עלינו</Link>
              <Link to="/categories" onClick={() => { handleLinkClick("categories"); toggleMenu() }} className={isActive === "categories" ? "active" : ""}>צמחים</Link>
              <Link to="/crystal" onClick={() => { handleLinkClick("crystal"); toggleMenu() }} className={isActive === "crystal" ? "active" : ""}>קריסטלים</Link>
              <Link to="/gallery" onClick={() => { handleLinkClick("gallery"); toggleMenu() }} className={isActive === "gallery" ? "active" : ""}>גלריה</Link>
              <a href="#connect" onClick={() => { handleLinkClick(null); toggleMenu() }}>דרכי התקשרות</a>
            </nav>
          </section>
        </section>
      )}
    </section>
  );
}
