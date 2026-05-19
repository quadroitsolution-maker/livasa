import { ArrowRight, Activity, ShieldCheck, Clock, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';
import gallery1 from '../assets/gallery/gallery-12.jpg';
import gallery2 from '../assets/gallery/gallery-2.jpg';
import gallery3 from '../assets/gallery/gallery-3.jpg';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Helmet>
        <title>511 Scans | Advanced PET-CT & Nuclear Medicine in Mohali</title>
        <meta name="description" content="Mohali's trusted PET-CT and nuclear medicine centre — bringing molecular imaging and radioligand therapy closer to every patient." />
      </Helmet>
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
              Mohali's trusted PET-CT and nuclear medicine centre — bringing molecular imaging and radioligand therapy closer to every patient.
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
          <div className={styles.missionVisionGrid}>
            <div className={styles.missionVisionCard}>
              <h3>Our Mission</h3>
              <p>To deliver accurate, timely, and patient-centred nuclear medicine diagnostics and therapies that empower physicians and guide life-changing treatment decisions — making advanced imaging and targeted treatment accessible to all patients across India.</p>
            </div>
            <div className={styles.missionVisionCard}>
              <h3>Our Vision</h3>
              <p>To be the region's leading nuclear medicine centre — recognised for clinical excellence, technological innovation, and compassionate patient care — shaping the future of molecular diagnostics and theranostics in South Asia.</p>
            </div>
            <div className={styles.valuesCard}>
              <h3>Our Core Values</h3>
              <ul className={styles.valuesList}>
                <li>Clinical Excellence</li>
                <li>Patient Safety</li>
                <li>Integrity</li>
                <li>Compassion</li>
                <li>Innovation</li>
                <li>Accuracy</li>
                <li>Accessibility</li>
                <li>Collaboration</li>
              </ul>
              <p className={styles.valuesFooter}>
                We believe that every patient deserves clear answers and dignified care. We work hand-in-hand with referring physicians to ensure our imaging and therapy findings translate into better outcomes — never just a report, but a clinical partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why the Name Section */}
      <section className={`section-padding ${styles.whyNameSection}`}>
        <div className="container">
          <div className={styles.whyNameBanner}>
            <div className={styles.whyNameContent}>
              <h2>Why the name <span className={styles.highlightName}>511 Scans</span>?</h2>
              <p>
                In Positron Emission Tomography (PET), when a positron annihilates with an electron, it releases two gamma rays each carrying exactly <span className={styles.highlightText}>511 keV</span> of energy — fired in opposite directions. This is the fundamental physics behind every PET scan we perform. Our name honours this principle: precision born from science, visualised for healing.
              </p>
            </div>
            <div className={styles.whyNameGraphic}>
              <div className={styles.bigNumber}>
                5<span className={styles.smallEleven}>11</span>
              </div>
              <div className={styles.numberSub}>keV per annihilation photon</div>
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
