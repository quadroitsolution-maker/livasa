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
      {/* Information for Physicians Section */}
      <section className={`section-padding ${styles.infoSection}`}>
        <div className="container">
          <div className={styles.infoHeader}>
            <h2>Information for Physicians</h2>
            <div className={styles.headerDivider}></div>
            <p>Clinical protocols, referral criteria, therapy pathways, and reporting standards for our referring partners</p>
          </div>
          
          <div className={styles.infoGrid}>
            {/* Card 1 */}
            <div className={styles.infoCard}>
              <h3>How to Refer</h3>
              <ul className={styles.infoList}>
                <li>Referral letter on clinic letterhead</li>
                <li>Clinical indication, diagnosis, relevant history</li>
                <li>Previous imaging (PET, CT, MRI) if available</li>
                <li>Current medications (anti-diabetics, SSA, anti-androgens)</li>
                <li>eGFR mandatory for therapy referrals</li>
                <li>Haematological parameters for therapy referrals</li>
                <li>Pregnancy/breastfeeding status</li>
              </ul>
              <Button variant="primary" style={{ marginTop: '1.5rem', backgroundColor: '#0e7490', border: 'none', borderRadius: '4px', fontSize: '0.9rem' }} icon={<Download size={16} />}>
                Download Referral Form
              </Button>
            </div>
            
            {/* Card 2 */}
            <div className={styles.infoCard}>
              <h3>Reporting Standards</h3>
              <ul className={styles.infoList}>
                <li>AERB-licensed, board-certified nuclear medicine physicians</li>
                <li>PERCIST 1.0 for treatment response</li>
                <li>Deauville/Lugano criteria for lymphoma</li>
                <li>PROMISE scoring for PSMA PET</li>
                <li>Krenning scale for somatostatin receptor imaging</li>
                <li>Structured reports with SUVmax, MTV, TLG on request</li>
              </ul>
            </div>
            
            {/* Card 3 */}
            <div className={styles.infoCard}>
              <h3>Physician Helpline</h3>
              <ul className={styles.infoList}>
                <li>Tracer/therapy selection for complex cases</li>
                <li>Patient preparation queries</li>
                <li>Therapy eligibility pre-screening</li>
                <li>Joint report review and MDT support</li>
                <li>CME sessions and theranostics conferences</li>
              </ul>
              <div className={styles.contactText}>
                +91-7428594511
              </div>
            </div>
            
            {/* Card 4 */}
            <div className={styles.infoCard}>
              <h3>Priority Booking</h3>
              <ul className={styles.infoList}>
                <li>Oncology staging prior to surgery or MDT</li>
                <li>Post-chemotherapy response assessment</li>
                <li>Therapy planning and dosimetry sessions</li>
                <li>Biochemical recurrence — urgent PSMA PET</li>
                <li>F-18 Choline pre-op parathyroid localisation</li>
                <li>Pre-TAVI cardiac viability assessment</li>
              </ul>
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

      {/* Quick Indication Reference Section */}
      <section className={`section-padding ${styles.referenceSection}`}>
        <div className="container">
          <h2 className={styles.referenceTitle}>Quick Indication Reference</h2>
          
          <div className={styles.tableResponsive}>
            <table className={styles.referenceTable}>
              <thead>
                <tr>
                  <th>Scan / Therapy</th>
                  <th>Agent</th>
                  <th>Key Indications</th>
                  <th>Key Preparation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>FDG PET-CT</td>
                  <td>F-18 FDG</td>
                  <td>Oncology staging, restaging, FUO, sarcoidosis, vasculitis</td>
                  <td>6hr fast, BG &lt;200 mg/dL</td>
                </tr>
                <tr>
                  <td>Brain PET-CT</td>
                  <td>F-18 FDG</td>
                  <td>Dementia, Alzheimer's, epilepsy, neuro-oncology</td>
                  <td>6hr fast, dim-light rest</td>
                </tr>
                <tr>
                  <td>Cardiac PET</td>
                  <td>Rb-82 / FDG</td>
                  <td>Myocardial perfusion, viability, cardiac sarcoidosis</td>
                  <td>Fasting, stress protocol</td>
                </tr>
                <tr>
                  <td>PSMA PET-CT</td>
                  <td>Ga-68 PSMA</td>
                  <td>Prostate Ca staging, biochemical recurrence</td>
                  <td>No special fast</td>
                </tr>
                <tr>
                  <td>DOTANOC PET-CT</td>
                  <td>Ga-68 DOTANOC</td>
                  <td>NETs, phaeochromocytoma, paraganglioma</td>
                  <td>Hold octreotide 4 weeks</td>
                </tr>
                <tr>
                  <td>F-18 Choline PET</td>
                  <td>F-18 Choline</td>
                  <td>Hyperparathyroidism pre-op, persistent/recurrent HPT</td>
                  <td>No special preparation</td>
                </tr>
                <tr>
                  <td>I-131 Therapy</td>
                  <td>I-131</td>
                  <td>Thyroid Ca remnant ablation, metastatic DTC, Graves'</td>
                  <td>Low-iodine diet 2wks; TSH &gt;30</td>
                </tr>
                <tr>
                  <td>Lu-177 PSMA RLT</td>
                  <td>Lu-177 PSMA-617</td>
                  <td>mCRPC post-ARSI and taxane, PSMA-positive</td>
                  <td>eGFR &gt;40; marrow reserve</td>
                </tr>
                <tr>
                  <td>Lu-177 DOTATATE</td>
                  <td>Lu-177 DOTATATE</td>
                  <td>Progressive GEP-NETs, SR-positive tumours</td>
                  <td>eGFR &gt;40; hold SSA 4wks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
