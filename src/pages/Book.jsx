import { Calendar, PhoneCall, CheckCircle, UploadCloud, ChevronRight } from 'lucide-react';
import Button from '../components/Button';
import styles from './Book.module.css';

export default function Book() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment request submitted successfully. We will contact you to confirm the date and time.');
  };

  return (
    <div className={styles.bookContainer}>
      <section className={styles.hero}>
        <div className="container">
          <h1>Request an Appointment</h1>
          <p>Please fill out the form below to request a scan. Our care coordinators will contact you shortly to confirm your appointment time and provide preparation instructions.</p>
        </div>
      </section>

      <section className="section-padding container">
        <div className={styles.bookingContent}>
          
          {/* Sidebar Information */}
          <div className={styles.infoSidebar}>
            <h3>What to expect</h3>
            <ul className={styles.infoList}>
              <li>
                <div className={styles.iconWrapper}><PhoneCall size={20} /></div>
                <div className={styles.infoText}>
                  <h4>Fast Response</h4>
                  <p>We aim to respond to all appointment requests within 2 hours during business operations.</p>
                </div>
              </li>
              <li>
                <div className={styles.iconWrapper}><CheckCircle size={20} /></div>
                <div className={styles.infoText}>
                  <h4>Insurance Verification</h4>
                  <p>Our team will handle the pre-authorization process with your insurance provider.</p>
                </div>
              </li>
              <li>
                <div className={styles.iconWrapper}><Calendar size={20} /></div>
                <div className={styles.infoText}>
                  <h4>Flexible Scheduling</h4>
                  <p>We offer early morning, evening, and weekend appointments for your convenience.</p>
                </div>
              </li>
            </ul>

            <div style={{ marginTop: '2.5rem', paddingTop: '2.5rem', borderTop: '1px solid #e2e8f0' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--primary-dark)' }}>Prefer to call?</h4>
              <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '0.95rem' }}>Our scheduling team is available Monday-Friday, 7am-7pm.</p>
              <Button variant="outline" style={{ width: '100%' }} icon={<PhoneCall size={18} />}>
                (555) 123-4567
              </Button>
            </div>
          </div>

          {/* Booking Form */}
          <div className={styles.bookingFormCard}>
            <form onSubmit={handleSubmit}>
              
              {/* Patient Details */}
              <div className={styles.formSection}>
                <h3>1. Patient Information</h3>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>First Name *</label>
                    <input type="text" required placeholder="Jane" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Last Name *</label>
                    <input type="text" required placeholder="Doe" />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Phone Number *</label>
                    <input type="tel" required placeholder="(555) 000-0000" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email Address</label>
                    <input type="email" placeholder="jane@example.com" />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Date of Birth *</label>
                  <input type="date" required />
                </div>
              </div>

              {/* Appointment Details */}
              <div className={styles.formSection}>
                <h3>2. Appointment Preferences</h3>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Type of Scan *</label>
                    <select required>
                      <option value="">Select scan type...</option>
                      <option value="pet-ct">PET-CT Scan</option>
                      <option value="pet-bone">PET Bone Scan</option>
                      <option value="pet-brain">PET Brain Scan</option>
                      <option value="pet-cardiac">PET Cardiac Scan</option>
                      <option value="unsure">I'm not sure</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Preferred Date</label>
                    <input type="date" />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Preferred Time of Day</label>
                  <select>
                    <option value="any">Any Time</option>
                    <option value="morning">Morning (7am - 12pm)</option>
                    <option value="afternoon">Afternoon (12pm - 4pm)</option>
                    <option value="evening">Evening (4pm - 7pm)</option>
                  </select>
                </div>
              </div>

              {/* Prescription Upload */}
              <div className={styles.formSection}>
                <h3>3. Upload Prescription (Optional but Recommended)</h3>
                <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Uploading your doctor's order now will speed up the authorization process.</p>
                
                <div className={styles.uploadArea}>
                  <UploadCloud size={40} className={styles.uploadIcon} />
                  <p>Drag and drop your prescription file here, or</p>
                  <div className={styles.uploadButton}>Browse Files</div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Additional Notes / Special Requirements</label>
                <textarea rows="3" placeholder="E.g., Need wheelchair access, claustrophobic..."></textarea>
              </div>

              <Button type="submit" variant="primary" style={{ width: '100%', marginTop: '2rem', padding: '1rem' }} icon={<ChevronRight size={20} />}>
                Request Appointment
              </Button>

            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
