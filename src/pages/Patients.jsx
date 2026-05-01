import { useState } from 'react';
import { Calendar, ClipboardList, Activity, Coffee, FileText, ChevronDown, Download } from 'lucide-react';
import Button from '../components/Button';
import styles from './Patients.module.css';

export default function Patients() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a PET-CT scan?",
      answer: "A PET-CT scan combines two imaging techniques: Positron Emission Tomography (PET) and Computed Tomography (CT). The PET scan shows how your organs and tissues are functioning at a cellular level, while the CT scan provides detailed anatomical pictures. Together, they offer a highly accurate diagnosis."
    },
    {
      question: "How should I prepare for my scan?",
      answer: "Preparation varies depending on the type of scan. Generally, you will be asked to fast for 4-6 hours before your appointment and avoid strenuous exercise for 24 hours prior. Detailed instructions will be provided when you book your appointment."
    },
    {
      question: "Is the radiation dose safe?",
      answer: "Yes. The amount of radiation exposure from a PET-CT scan is small and well within safe limits. The benefits of obtaining an accurate diagnosis far outweigh the minimal risks associated with the radiation."
    },
    {
      question: "How long does the procedure take?",
      answer: "You should plan to be at our center for about 2 to 3 hours. This includes time for preparation, the injection of the radiotracer, a resting period for the tracer to distribute, and the scan itself (which usually takes 15-30 minutes)."
    },
    {
      question: "When will my doctor get the results?",
      answer: "Our specialized radiologists will analyze your images and send a detailed report to your referring physician, typically within 24 to 48 hours."
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

      {/* Patient Journey Timeline */}
      <section className={`section-padding ${styles.journeySection}`}>
        <div className="container">
          <h2>Your Scan Journey</h2>
          <div className={styles.timeline}>
            
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
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
