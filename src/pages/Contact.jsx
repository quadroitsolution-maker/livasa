import { MapPin, Phone, Mail, Clock, Send, Map } from 'lucide-react';
import Button from '../components/Button';
import styles from './Contact.module.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully. Our team will get back to you shortly.');
  };

  return (
    <div className={styles.contactContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1>Contact Us</h1>
          <p>We are here to answer your questions and help you schedule your appointment.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding container">
        <div className={styles.contactContent}>
          
          {/* Contact Info */}
          <div>
            <div className={styles.contactInfoCard}>
              
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><MapPin size={24} /></div>
                <div className={styles.infoText}>
                  <h3>Visit Us</h3>
                  <p>123 Medical Plaza, Suite 500<br/>New York, NY 10001</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><Phone size={24} /></div>
                <div className={styles.infoText}>
                  <h3>Call Us</h3>
                  <p>Main: (555) 123-4567<br/>Fax: (555) 123-4568</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><Mail size={24} /></div>
                <div className={styles.infoText}>
                  <h3>Email Us</h3>
                  <p>info@511scans.com<br/>appointments@511scans.com</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><Clock size={24} /></div>
                <div className={styles.infoText}>
                  <h3>Hours of Operation</h3>
                  <p>Monday - Friday: 7:00 AM - 7:00 PM<br/>Saturday: 8:00 AM - 2:00 PM<br/>Sunday: Closed</p>
                </div>
              </div>

            </div>

            <div className={styles.mapContainer}>
              <div className={styles.mapPlaceholder}>
                <Map size={48} style={{ marginBottom: '1rem', color: 'var(--primary-blue)' }} />
                <p>Interactive Map Placeholder</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className={styles.contactFormCard}>
              <h2>Send us a Message</h2>
              <p>Have a question or need assistance? Fill out the form below and our team will get in touch with you.</p>
              
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label>Full Name *</label>
                  <input type="text" required placeholder="John Doe" />
                </div>
                
                <div className={styles.formGroup}>
                  <label>Email Address *</label>
                  <input type="email" required placeholder="john@example.com" />
                </div>
                
                <div className={styles.formGroup}>
                  <label>Phone Number</label>
                  <input type="tel" placeholder="(555) 000-0000" />
                </div>
                
                <div className={styles.formGroup}>
                  <label>Subject *</label>
                  <input type="text" required placeholder="How can we help?" />
                </div>
                
                <div className={styles.formGroup}>
                  <label>Message *</label>
                  <textarea rows="5" required placeholder="Please provide details..."></textarea>
                </div>
                
                <Button type="submit" variant="primary" style={{ width: '100%', marginTop: '1rem' }} icon={<Send size={18} />}>
                  Send Message
                </Button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
