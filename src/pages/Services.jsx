import { Brain, Heart, Stethoscope, Microscope, CheckCircle, ArrowRight, Activity, ShieldCheck } from 'lucide-react';
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
          {/* Oncology PET-CT */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <Microscope size={32} />
            </div>
            <h3>Oncology PET-CT</h3>
            <p>Comprehensive whole-body PET-CT scans for early cancer detection, accurate staging, and therapy response monitoring — empowering oncologists to make the best treatment decisions.</p>
            <ul className={styles.serviceFeatures}>
              <li><CheckCircle size={16} /> Whole-body PET-CT scans</li>
              <li><CheckCircle size={16} /> Cancer staging &amp; restaging</li>
              <li><CheckCircle size={16} /> Therapy response monitoring</li>
              <li><CheckCircle size={16} /> Recurrence detection</li>
            </ul>
            <Button to="/book" variant="outline">Book Oncology Scan</Button>
          </div>

          {/* Cardiac PET */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <Heart size={32} />
            </div>
            <h3>Cardiac PET</h3>
            <p>Advanced cardiac PET imaging for precise evaluation of myocardial viability, cardiac sarcoidosis, and infective endocarditis — helping cardiologists plan the most effective interventions.</p>
            <ul className={styles.serviceFeatures}>
              <li><CheckCircle size={16} /> Myocardial viability assessment</li>
              <li><CheckCircle size={16} /> Cardiac sarcoidosis evaluation</li>
              <li><CheckCircle size={16} /> Infective endocarditis imaging</li>
            </ul>
            <Button to="/book" variant="outline">Book Cardiac Scan</Button>
          </div>

          {/* Neurological PET */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <Brain size={32} />
            </div>
            <h3>Neurological PET</h3>
            <p>Detailed evaluation of brain function and structure for diagnosing and managing neurological disorders including dementia, brain tumors, and epilepsy-related seizure assessment.</p>
            <ul className={styles.serviceFeatures}>
              <li><CheckCircle size={16} /> Dementia evaluation</li>
              <li><CheckCircle size={16} /> Brain tumor assessment</li>
              <li><CheckCircle size={16} /> Seizure focus localization</li>
            </ul>
            <Button to="/book" variant="outline">Book Neuro Scan</Button>
          </div>

          {/* General Diagnostics */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <Stethoscope size={32} />
            </div>
            <h3>General Diagnostics</h3>
            <p>Versatile PET-CT imaging for infection and inflammation assessment, recurrence detection, and treatment response follow-ups — providing clarity when conventional imaging falls short.</p>
            <ul className={styles.serviceFeatures}>
              <li><CheckCircle size={16} /> Infection &amp; inflammation assessment</li>
              <li><CheckCircle size={16} /> Recurrence detection</li>
              <li><CheckCircle size={16} /> Treatment response follow-ups</li>
            </ul>
            <Button to="/book" variant="outline">Book Diagnostic Scan</Button>
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
