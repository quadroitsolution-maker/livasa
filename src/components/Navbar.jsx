import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Globe } from 'lucide-react';
import styles from './Navbar.module.css';
import logo from '../assets/logo.png.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('en');

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLang(newLang);
    
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = newLang;
      select.dispatchEvent(new Event('change'));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'For Patients', path: '/patients' },
    { name: 'For Physicians', path: '/physicians' },
    { name: 'Contact', path: '/contact' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Logo Area */}
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="511 Scans Logo" className={styles.logoImage} />
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className={styles.navLink}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.navActions}>
            <div className={styles.languageSelector}>
              <Globe size={18} className={styles.globeIcon} />
              <select value={lang} onChange={handleLanguageChange} className={styles.langSelect} aria-label="Select Language">
                <option value="en">EN</option>
                <option value="hi">HI</option>
                <option value="pa">PA</option>
              </select>
            </div>
            <a href="tel:+918078880788" className={styles.phoneLink}>
              <Phone size={18} />
              <span>+91 80788 80788</span>
            </a>
            <Link to="/book" className={styles.bookBtn}>
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.mobileNavOpen : ''}`}>
        <ul className={styles.mobileNavLinks}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                className={styles.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.mobileNavActions}>
          <div className={styles.mobileLanguageSelector}>
            <Globe size={18} className={styles.globeIcon} />
            <select value={lang} onChange={handleLanguageChange} className={styles.langSelect} aria-label="Select Language">
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="pa">ਪੰਜਾਬੀ</option>
            </select>
          </div>
          <Link 
            to="/book" 
            className={styles.mobileBookBtn}
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}
