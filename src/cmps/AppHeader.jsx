import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import trees from "../assets/imgs/trees.svg";
import phone from "../assets/imgs/icons/phone.svg";


export function AppHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`app-header full ${isScrolled ? 'scrolled' : ''}`}>
      <section>
        <section className="app-header-content">
          <section className="header-contact">
            <Link to="/">
              <section className="logo">
                <img src={trees} alt="logo" />
                <p>גינת תמר</p>
              </section>
            </Link>
            <h1>גינת תמר</h1>
            <section className="header-call">
              <a href="tel:02-6710335"><img src={phone} /></a>
              <a href="tel:02-6710335"><p>02-6710335</p></a>
            </section>
          </section>
        </section>
        <hr />
        <nav>
          <a href="#connect">דרכי התקשרות</a>
          <Link to="/gallery">גלריה</Link>
          <Link to="/crystal">קריסטלים</Link>
          <Link to="/categories">צמחים</Link>
          <Link to="/about" >קצת עלינו</Link>
          <Link to="/" >בית</Link>
        </nav>
      </section>
    </section>
  );
}
