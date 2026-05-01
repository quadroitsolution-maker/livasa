import { ShieldCheck, Clock, FileCheck, Download, Send } from 'lucide-react';
import Button from '../components/Button';
import styles from './Physicians.module.css';

export default function Physicians() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert('Referral submitted successfully. Our team will contact the patient shortly.');
  };

  return (
    <div className={styles.physiciansContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1>For Referring Physicians</h1>
          <p>Partnering with you to provide unparalleled diagnostic clarity. We are an extension of your practice, committed to accuracy and rapid reporting.</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`section-padding ${styles.benefitsSection}`}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>Why Refer to 511 Scans?</h2>
            <p className="text-muted" style={{ marginTop: '1rem', fontSize: '1.1rem' }}>We understand that your clinical decisions rely on the quality and timeliness of our imaging.</p>
          </div>
          
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <ShieldCheck size={40} className={styles.benefitIcon} />
              <h3>Uncompromised Image Quality</h3>
              <p>Our advanced PET-CT scanners deliver high-resolution images with exceptional contrast, enabling the detection of minute lesions and accurate staging.</p>
            </div>
            
            <div className={styles.benefitCard}>
              <FileCheck size={40} className={styles.benefitIcon} />
              <h3>Expert Interpretation</h3>
              <p>All scans are read by our team of sub-specialized, board-certified radiologists and nuclear medicine physicians.</p>
            </div>
            
            <div className={styles.benefitCard}>
              <Clock size={40} className={styles.benefitIcon} />
              <h3>Rapid Turnaround Time</h3>
              <p>We prioritize urgent cases. Routine reports are delivered securely within 24-48 hours, and STAT reports are available within hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Form Section */}
      <section className={`section-padding ${styles.referralSection}`}>
        <div className={`container ${styles.referralContainer}`}>
          
          <div className={styles.referralInfo}>
            <h2>Streamlined Referral Process</h2>
            <p>We have made it simple to refer your patients to 511 Scans. You can submit a referral online using the secure form, or download our PDF requisition form to fax or email.</p>
            
            <div style={{ marginTop: '2.5rem' }}>
              <div className={styles.downloadCard}>
                <div>
                  <Download size={24} className={styles.downloadIcon} />
                  <div>
                    <h4>Standard Requisition Form</h4>
                    <p className="text-muted">PDF Document (124 KB)</p>
                  </div>
                </div>
                <Button variant="outline">Download</Button>
              </div>
              
              <div className={styles.downloadCard}>
                <div>
                  <Download size={24} className={styles.downloadIcon} />
                  <div>
                    <h4>Physician Portal Guide</h4>
                    <p className="text-muted">PDF Document (850 KB)</p>
                  </div>
                </div>
                <Button variant="outline">Download</Button>
              </div>
            </div>
          </div>

          <div className={styles.formCard}>
            <h3>Submit a Referral</h3>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label>Referring Physician Name *</label>
                <input type="text" required placeholder="Dr. John Doe" />
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Clinic / Hospital *</label>
                  <input type="text" required placeholder="City Medical Center" />
                </div>
                <div className={styles.formGroup}>
                  <label>NPI Number</label>
                  <input type="text" placeholder="Optional" />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label>Physician Email *</label>
                <input type="email" required placeholder="doctor@clinic.com" />
              </div>
              
              <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #e2e8f0' }} />
              
              <div className={styles.formGroup}>
                <label>Patient Name *</label>
                <input type="text" required placeholder="Jane Smith" />
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Patient Phone *</label>
                  <input type="tel" required placeholder="(555) 123-4567" />
                </div>
                <div className={styles.formGroup}>
                  <label>Requested Scan *</label>
                  <select required>
                    <option value="">Select a scan type...</option>
                    <option value="oncology">Whole Body PET-CT (Oncology)</option>
                    <option value="neurology">Brain PET-CT (Neurology)</option>
                    <option value="cardiology">Cardiac Viability PET</option>
                    <option value="bone">Bone Scan</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label>Clinical Indication / Notes</label>
                <textarea rows="4" placeholder="Brief clinical history and specific questions to be addressed..."></textarea>
              </div>
              
              <Button type="submit" variant="primary" style={{ width: '100%', marginTop: '1rem' }} icon={<Send size={18} />}>
                Submit Referral Securely
              </Button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
