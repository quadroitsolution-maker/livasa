import { Brain, Heart, Bone, Stethoscope, Microscope, CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import styles from './Services.module.css';

export default function Services() {
  return (
    <div className={styles.servicesContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1>Our Diagnostic Services</h1>
          <p>Comprehensive PET-CT imaging solutions delivering unparalleled clarity for accurate diagnosis and targeted treatment planning.</p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section-padding container">
        <div className={styles.servicesGrid}>
          {/* Oncology */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <Microscope size={32} />
            </div>
            <h3>Oncology Imaging</h3>
            <p>Early detection, staging, and monitoring of various cancers. Our advanced PET-CT scans provide precise metabolic and anatomical information to guide oncological treatments.</p>
            <ul className={styles.serviceFeatures}>
              <li><CheckCircle size={16} /> Tumor localization</li>
              <li><CheckCircle size={16} /> Treatment response monitoring</li>
              <li><CheckCircle size={16} /> Radiation therapy planning</li>
            </ul>
            <Button to="/book" variant="outline">Book Oncology Scan</Button>
          </div>

          {/* Neurology */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <Brain size={32} />
            </div>
            <h3>Neurology Imaging</h3>
            <p>Detailed evaluation of brain function and structure. Essential for diagnosing and managing neurological disorders such as Alzheimer's, epilepsy, and brain tumors.</p>
            <ul className={styles.serviceFeatures}>
              <li><CheckCircle size={16} /> Dementia evaluation</li>
              <li><CheckCircle size={16} /> Seizure focus localization</li>
              <li><CheckCircle size={16} /> Brain tumor assessment</li>
            </ul>
            <Button to="/book" variant="outline">Book Neurology Scan</Button>
          </div>

          {/* Cardiology */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <Heart size={32} />
            </div>
            <h3>Cardiology Imaging</h3>
            <p>Assessment of myocardial viability and blood flow. Helps in determining the best course of action for patients with coronary artery disease and heart conditions.</p>
            <ul className={styles.serviceFeatures}>
              <li><CheckCircle size={16} /> Myocardial viability assessment</li>
              <li><CheckCircle size={16} /> Cardiac sarcoidosis evaluation</li>
              <li><CheckCircle size={16} /> Infection imaging</li>
            </ul>
            <Button to="/book" variant="outline">Book Cardiology Scan</Button>
          </div>

          {/* Orthopedics / Bone */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <Bone size={32} />
            </div>
            <h3>Bone Imaging</h3>
            <p>Highly sensitive whole-body imaging to detect skeletal metastases and other bone-related pathologies earlier than conventional scans.</p>
            <ul className={styles.serviceFeatures}>
              <li><CheckCircle size={16} /> Metastatic disease detection</li>
              <li><CheckCircle size={16} /> Unexplained bone pain</li>
              <li><CheckCircle size={16} /> Infection and inflammation</li>
            </ul>
            <Button to="/book" variant="outline">Book Bone Scan</Button>
          </div>

          {/* General Diagnostics */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <Stethoscope size={32} />
            </div>
            <h3>General Diagnostics</h3>
            <p>Versatile imaging for various systemic conditions, infections, and fever of unknown origin. Providing clarity when conventional imaging falls short.</p>
            <ul className={styles.serviceFeatures}>
              <li><CheckCircle size={16} /> Fever of unknown origin</li>
              <li><CheckCircle size={16} /> Infection localization</li>
              <li><CheckCircle size={16} /> Vasculitis assessment</li>
            </ul>
            <Button to="/book" variant="outline">Book General Scan</Button>
          </div>
        </div>
      </section>

      {/* Technology Highlight */}
      <section className={`section-padding ${styles.technologySection}`}>
        <div className={`container ${styles.techContent}`}>
          <div className={styles.techText}>
            <h2>Powered by State-of-the-Art Technology</h2>
            <p>At 511 Scans, we utilize the latest generation of PET-CT scanners. This means higher resolution images, shorter scan times, and lower radiation doses for our patients.</p>
            <p>Our commitment to technological excellence ensures that your physicians receive the most accurate data possible to formulate your care plan.</p>
            <Button to="/book" variant="primary" icon={<ArrowRight size={20} />}>
              Schedule Your Scan Today
            </Button>
          </div>
          <div className={styles.techImageContainer}>
            <div className={styles.techImage}>
              {/* Abstract representation of a high-tech scanner */}
              <div className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: '600' }}>Advanced Imaging Core</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
