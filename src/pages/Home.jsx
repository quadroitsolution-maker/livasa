import { ArrowRight, Activity, ShieldCheck, Clock, Users } from 'lucide-react';
import Button from '../components/Button';
import gallery1 from '../assets/gallery/gallery-1.jpg';
import gallery2 from '../assets/gallery/gallery-2.jpg';
import gallery3 from '../assets/gallery/gallery-3.jpg';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.blurCircle1}></div>
          <div className={styles.blurCircle2}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <div className={styles.badge}>State-of-the-art Imaging</div>
            <h1 className={styles.title}>
              Precision In <span className="text-gradient">Every Pixel</span>
            </h1>
            <p className={styles.subtitle}>
              Livasa Med Care’s premium PET-CT diagnostic center. We combine advanced technology with compassionate care for early detection and unparalleled accuracy.
            </p>
            <div className={styles.heroActions}>
              <Button to="/book" variant="primary" icon={<ArrowRight size={20} />}>
                Book a Scan
              </Button>
              <Button to="/services" variant="secondary">
                Explore Services
              </Button>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            {/* We will use a placeholder or stylized box for now since we lack assets */}
            <div className={`${styles.imagePlaceholder} glass-panel`}>
              <div className={styles.scannerRing}></div>
              <div className={styles.scannerBed}></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Overview Section */}
      <section className={`section-padding ${styles.aboutSection}`}>
        <div className="container">
          <div className={styles.aboutContent}>
            <h2>511 Scans: The PET CT Centre</h2>
            <p className={styles.aboutHighlight}>
              A state-of-the-art nuclear medicine facility, now open in Sector 71, Mohali.
            </p>
            
            <p className={styles.aboutEquipped}>Our centre is equipped to offer:</p>
            
            <div className={styles.offeringsGrid}>
              <div className={styles.offeringCard}>
                <div className={styles.offeringHeader}>
                  <span className={styles.offeringEmoji}>🔬</span>
                  <h3>Diagnostic Services</h3>
                </div>
                <ul>
                  <li>Comprehensive PET CT Scans</li>
                </ul>
              </div>
              
              <div className={styles.offeringCard}>
                <div className={styles.offeringHeader}>
                  <span className={styles.offeringEmoji}>💉</span>
                  <h3>Therapeutic Services</h3>
                </div>
                <ul>
                  <li>Radionuclide Ligand Therapy (RLT)</li>
                  <li>I-131 Therapy</li>
                </ul>
              </div>
              
              <div className={styles.offeringCard}>
                <div className={styles.offeringHeader}>
                  <span className={styles.offeringEmoji}>💳</span>
                  <h3>Payment Options</h3>
                </div>
                <ul>
                  <li>Self-Pay</li>
                  <li>Cashless (Insurance &amp; Empanelled)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`section-padding ${styles.features}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Why Choose 511 Scans?</h2>
            <p>Setting the standard for medical imaging with clarity, speed, and care.</p>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><Activity size={32} /></div>
              <h3>Advanced PET-CT</h3>
              <p>Our latest generation scanners provide ultra-high resolution images, identifying metabolic changes at the cellular level.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><ShieldCheck size={32} /></div>
              <h3>Uncompromised Accuracy</h3>
              <p>Precision diagnostics help your physicians make informed decisions for targeted and effective treatment plans.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><Clock size={32} /></div>
              <h3>Faster Results</h3>
              <p>We prioritize your time and peace of mind with streamlined workflows that deliver accurate reports faster.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><Users size={32} /></div>
              <h3>Compassionate Care</h3>
              <p>From the moment you walk in, our expert staff ensures a comfortable, supportive, and safe environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery CTA */}
      <section className={`section-padding ${styles.gallerySection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Our Facility</h2>
            <p>Take a look at our state-of-the-art diagnostic center.</p>
          </div>
          <div className={styles.galleryPreview}>
            <img src={gallery1} alt="PET-CT Scanner" className={styles.previewImg} />
            <img src={gallery2} alt="Livasa Med Centre" className={styles.previewImg} />
            <img src={gallery3} alt="Waiting Area" className={styles.previewImg} />
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Button to="/gallery" variant="secondary">View Full Gallery</Button>
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className={`section-padding ${styles.dualCtaSection}`}>
        <div className="container">
          <div className={styles.dualCtaGrid}>
            {/* For Patients */}
            <div className={`${styles.ctaCard} ${styles.patientCta}`}>
              <h3>For Patients</h3>
              <p>Take control of your health. Schedule your scan with our easy online booking system or speak with our care coordinators.</p>
              <Button to="/book" variant="primary">Book Appointment</Button>
            </div>
            
            {/* For Physicians */}
            <div className={`${styles.ctaCard} ${styles.physicianCta}`}>
              <h3>For Physicians</h3>
              <p>Partner with us for reliable, high-resolution imaging and prompt reporting to support your clinical practice.</p>
              <Button to="/physicians" variant="outline">Refer a Patient</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
