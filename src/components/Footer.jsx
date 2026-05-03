import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';
import logo from '../assets/logo.png.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        {/* Brand Column */}
        <div className={styles.brandCol}>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="511 Scans Logo" className={styles.logoImage} />
          </Link>
          <p className={styles.tagline}>Precision In Every Pixel.</p>
          <p className={styles.description}>
            A Livasa Med Care facility dedicated to early detection and accurate diagnostic imaging using state-of-the-art PET-CT technology.
          </p>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Twitter">X</a>
            <a href="#" aria-label="Instagram">IG</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.linksCol}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Scans</Link></li>
            <li><Link to="/patients">Patient Guide</Link></li>
            <li><Link to="/physicians">Physician Portal</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className={styles.linksCol}>
          <h3>Services</h3>
          <ul>
            <li><Link to="/services#pet-ct">Whole Body PET-CT</Link></li>
            <li><Link to="/services#cardiac">Cardiac PET</Link></li>
            <li><Link to="/services#neuro">Neuro PET</Link></li>
            <li><Link to="/services#psma">PSMA PET-CT</Link></li>
            <li><Link to="/services#fdg">FDG PET-CT</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.contactCol}>
          <h3>Contact Us</h3>
          <div className={styles.contactItem}>
            <MapPin size={20} className={styles.contactIcon} />
            <p>SCO 38, Livasa MedCentre,<br />Sector 71, SAS Nagar (Mohali),<br />Punjab - 160071</p>
          </div>
          <div className={styles.contactItem}>
            <Phone size={20} className={styles.contactIcon} />
            <p>+91 80788 80788<br />+91 74285 94511<br />Mon-Sat: 7:00 AM - 7:00 PM</p>
          </div>
          <div className={styles.contactItem}>
            <Mail size={20} className={styles.contactIcon} />
            <p>info@livasamedcare.com</p>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContent}`}>
          <p>&copy; {new Date().getFullYear()} 511 Scans | Livasa Med Care. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
