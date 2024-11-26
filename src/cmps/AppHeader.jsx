import { useState, useEffect } from 'react';
import trees from "../assets/imgs/trees.svg";

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
      <section className="app-header-content">
        <section className="logo">
          <img src={trees} alt="logo" />
          <p>גינת תמר</p>
        </section>
        <nav>
          <a>דרכי התקשרות</a>
          <a>גלריה</a>
          <a>קריסטלים</a>
          <a>צמחים</a>
          <a>קצת עלינו</a>
          <a>בית</a>
        </nav>
      </section>
    </section>
  );
}
