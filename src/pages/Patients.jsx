import { useState } from 'react';
import { Calendar, ClipboardList, Activity, Coffee, FileText, ChevronDown, Download } from 'lucide-react';
import Button from '../components/Button';
import styles from './Patients.module.css';

export default function Patients() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('scan');

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a PET-CT scan?",
      answer: "PET-CT combines two technologies. The PET scan measures metabolic activity by detecting a radioactive tracer (usually FDG — a glucose-like molecule) injected into your vein. The CT provides anatomical detail. Together they pinpoint abnormal activity — cancer, inflammation, neurological changes — with extraordinary precision."
    },
    {
      question: "What is F-18 Choline PET for parathyroid?",
      answer: "Fluorocholine PET-CT uses F-18 Choline tracer, preferentially taken up by overactive parathyroid glands. It is the most sensitive method to localise parathyroid adenomas in primary hyperparathyroidism — especially when ultrasound and sestamibi have been inconclusive. Provides your surgeon a precise roadmap for minimally-invasive parathyroidectomy."
    },
    {
      question: "Is the radiation safe?",
      answer: "Yes. Diagnostic tracers use short-lived isotopes with doses comparable to standard CT scans (approx. 7–14 mSv for FDG PET-CT). Therapeutic isotopes (I-131, Lu-177) deliver radiation predominantly to the target tissue. Our team implements full AERB radiation safety protocols for all procedures."
    },
    {
      question: "How do I prepare for my PET scan?",
      answer: (
        <>
          <p style={{ marginBottom: '0.5rem' }}>For FDG PET-CT:</p>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Fast for at least 4–6 hours (water is permitted)</li>
            <li>Avoid strenuous exercise for 24 hours prior</li>
            <li>Diabetic patients: call us in advance for specific insulin guidance</li>
            <li>Avoid caffeine and alcohol for 24 hours</li>
            <li>Wear comfortable, loose-fitting clothing without metal</li>
            <li>Bring your referral letter, previous imaging, and photo ID</li>
            <li>Arrive 30 minutes before your scheduled time</li>
          </ul>
        </>
      )
    },
    {
      question: "What is I-131 Radioiodine Therapy?",
      answer: "An oral therapy for thyroid conditions. You swallow a small radioiodine capsule. Because the thyroid and thyroid cancer cells are the only tissues that absorb iodine, radiation is delivered almost exclusively to thyroid tissue. Used post-thyroidectomy, for thyroid cancer spread, Graves' disease and toxic goitre. You stay in our isolation room for 1–3 days per AERB guidelines."
    },
    {
      question: "When will I get my report?",
      answer: "Reports are delivered the same day for most scans. Urgent cases are prioritised and reported within 4–6 hours on request. Reports are reviewed and signed by board-certified nuclear medicine physicians and delivered digitally (email/WhatsApp) and as hard copy."
    }
  ];

  return (
    <div className={styles.patientsContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1>Patient Information</h1>
          <p>We are dedicated to making your visit as comfortable and stress-free as possible. Here is everything you need to know about your upcoming scan.</p>
        </div>
      </section>

      {/* Patient Journey Tabs */}
      <section className={`section-padding ${styles.journeySection}`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Your Journey With Us</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '1rem auto 0' }}>Select your path below to understand what to expect during your visit.</p>
          </div>
          
          <div className={styles.tabContainer} style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <button 
              className={styles.tabButton} 
              style={{ padding: '0.75rem 2rem', borderRadius: 'var(--radius-full)', border: activeTab === 'scan' ? 'none' : '1px solid var(--border-color)', background: activeTab === 'scan' ? 'var(--brand-gradient)' : 'transparent', color: activeTab === 'scan' ? 'white' : 'var(--text-color)', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s ease' }}
              onClick={() => setActiveTab('scan')}
            >
              Diagnostic Scan
            </button>
            <button 
              className={styles.tabButton} 
              style={{ padding: '0.75rem 2rem', borderRadius: 'var(--radius-full)', border: activeTab === 'therapy' ? 'none' : '1px solid var(--border-color)', background: activeTab === 'therapy' ? 'var(--brand-gradient)' : 'transparent', color: activeTab === 'therapy' ? 'white' : 'var(--text-color)', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s ease' }}
              onClick={() => setActiveTab('therapy')}
            >
              Therapy Services
            </button>
          </div>

          <div className={styles.timeline}>
            {activeTab === 'scan' ? (
              <>
                <div className={styles.timelineStep}>
                  <div className={styles.stepIcon}><Calendar size={24} /></div>
                  <div className={styles.stepContent}>
                    <h3>1. Scheduling</h3>
                    <p>Book your appointment online or over the phone. Our coordinators will guide you through insurance verification and provide specific preparation instructions.</p>
                  </div>
                </div>

                <div className={styles.timelineStep}>
                  <div className={styles.stepIcon}><Coffee size={24} /></div>
                  <div className={styles.stepContent}>
                    <h3>2. Preparation</h3>
                    <p>Follow your fasting and medication guidelines. Wear comfortable, warm clothing without metal zippers or buttons on the day of your scan.</p>
                  </div>
                </div>

                <div className={styles.timelineStep}>
                  <div className={styles.stepIcon}><ClipboardList size={24} /></div>
                  <div className={styles.stepContent}>
                    <h3>3. Arrival & Injection</h3>
                    <p>Upon arrival, a technologist will review your history. You will receive a small injection of a radiotracer, followed by a quiet resting period of about 45-60 minutes.</p>
                  </div>
                </div>

                <div className={styles.timelineStep}>
                  <div className={styles.stepIcon}><Activity size={24} /></div>
                  <div className={styles.stepContent}>
                    <h3>4. The Scan</h3>
                    <p>You will lie comfortably on the scanner bed. The scan itself is painless and typically takes 15 to 30 minutes. Our staff will monitor you at all times.</p>
                  </div>
                </div>

                <div className={styles.timelineStep}>
                  <div className={styles.stepIcon}><FileText size={24} /></div>
                  <div className={styles.stepContent}>
                    <h3>5. Results</h3>
                    <p>You can resume normal activities immediately. Our expert radiologists will interpret the scan and send a comprehensive report to your doctor within 24-48 hours.</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles.timelineStep}>
                  <div className={styles.stepIcon}><Calendar size={24} /></div>
                  <div className={styles.stepContent}>
                    <h3>1. Consultation</h3>
                    <p>Schedule an initial consultation with our specialists to discuss your diagnosis and determine if targeted radionuclide therapy is the right course of action for you.</p>
                  </div>
                </div>

                <div className={styles.timelineStep}>
                  <div className={styles.stepIcon}><ClipboardList size={24} /></div>
                  <div className={styles.stepContent}>
                    <h3>2. Treatment Planning</h3>
                    <p>If approved, we will formulate a personalized treatment plan. You will receive detailed guidelines on any necessary dietary changes, medication adjustments, or other preparations.</p>
                  </div>
                </div>

                <div className={styles.timelineStep}>
                  <div className={styles.stepIcon}><Activity size={24} /></div>
                  <div className={styles.stepContent}>
                    <h3>3. Administration</h3>
                    <p>The therapeutic agent (such as I-131 or RLT) will be administered safely in our specialized suite. The process is straightforward and closely monitored by our medical team.</p>
                  </div>
                </div>

                <div className={styles.timelineStep}>
                  <div className={styles.stepIcon}><Coffee size={24} /></div>
                  <div className={styles.stepContent}>
                    <h3>4. Post-Treatment Care</h3>
                    <p>Following administration, you will be briefed on specific radiation safety precautions to follow at home for a few days to protect your family and others.</p>
                  </div>
                </div>

                <div className={styles.timelineStep}>
                  <div className={styles.stepIcon}><FileText size={24} /></div>
                  <div className={styles.stepContent}>
                    <h3>5. Follow-up</h3>
                    <p>We will schedule regular follow-up scans and appointments to monitor the effectiveness of the therapy and ensure your ongoing health and safety.</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Download Prep Section */}
      <section className={`section-padding ${styles.prepSection}`}>
        <div className="container">
          <h2>Preparation Guidelines</h2>
          <p>Download our comprehensive patient preparation guide to ensure you are ready for your appointment.</p>
          <Button variant="secondary" icon={<Download size={20} />}>
            Download Patient Guide (PDF)
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`section-padding ${styles.faqSection}`}>
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <div 
                  className={styles.faqQuestion} 
                  onClick={() => toggleFaq(index)}
                >
                  <h3>{faq.question}</h3>
                  <ChevronDown 
                    size={20} 
                    className={`${styles.faqIcon} ${openFaq === index ? styles.open : ''}`} 
                  />
                </div>
                <div className={`${styles.faqAnswer} ${openFaq === index ? styles.open : ''}`}>
                  {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
