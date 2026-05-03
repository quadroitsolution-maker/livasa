import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
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
                  <p>SCO 38, Livasa MedCentre,<br/>Sector 71, SAS Nagar (Mohali),<br/>Punjab - 160071</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><Phone size={24} /></div>
                <div className={styles.infoText}>
                  <h3>Call Us</h3>
                  <p>Main: +91 80788 80788<br/>PET-CT: +91 74285 94511</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><Mail size={24} /></div>
                <div className={styles.infoText}>
                  <h3>Email Us</h3>
                  <p>info@livasamedcare.com<br/>appointments@livasamedcare.com</p>
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
              <iframe
                title="Livasa Med Centre Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.0!2d76.7!3d30.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSCO%2038%2C%20Sector%2071%2C%20Mohali!5e0!3m2!1sen!2sin!4v1600000000000"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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
