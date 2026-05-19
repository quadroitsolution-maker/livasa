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
          {/* 1 */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <Microscope size={32} />
            </div>
            <h3>FDG PET-CT</h3>
            <p>Whole-body fluorodeoxyglucose PET-CT for oncology staging, restaging, treatment response assessment, and detection of occult malignancy.</p>
            <div className={styles.tagContainer}>
              <span className={styles.serviceTag}>ONCOLOGY</span>
            </div>
          </div>

          {/* 2 */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <Brain size={32} />
            </div>
            <h3>Brain PET-CT</h3>
            <p>FDG and amyloid PET imaging for Alzheimer's disease, dementia evaluation, epilepsy focus localisation, and neuro-oncology.</p>
            <div className={styles.tagContainer}>
              <span className={styles.serviceTag}>NEUROLOGY</span>
            </div>
          </div>

          {/* 3 */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <Heart size={32} />
            </div>
            <h3>Cardiac PET</h3>
            <p>Myocardial perfusion and viability assessment using Rb-82 or FDG — superior resolution vs. SPECT for CAD diagnosis and cardiac sarcoidosis.</p>
            <div className={styles.tagContainer}>
              <span className={styles.serviceTag}>CARDIOLOGY</span>
            </div>
          </div>

          {/* 4 */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <ShieldCheck size={32} />
            </div>
            <h3>PSMA PET-CT</h3>
            <p>Gallium-68 PSMA imaging for prostate cancer staging, biochemical recurrence localisation, and candidate selection for PSMA radioligand therapy.</p>
            <div className={styles.tagContainer}>
              <span className={styles.serviceTag}>UROLOGY / ONCOLOGY</span>
            </div>
          </div>

          {/* 5 */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <Activity size={32} />
            </div>
            <h3>Ga-68 DOTANOC / DOTATATE PET-CT</h3>
            <p>Somatostatin receptor imaging for neuroendocrine tumours — diagnosis, staging, and patient selection for peptide receptor radionuclide therapy (PRRT).</p>
            <div className={styles.tagContainer}>
              <span className={styles.serviceTag}>NET / ENDOCRINOLOGY</span>
            </div>
          </div>

          {/* 6 */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <Stethoscope size={32} />
            </div>
            <h3>F-18 Choline PET-CT — Parathyroid</h3>
            <p>Fluorocholine (F-18) PET-CT is the most sensitive imaging modality for localising hyperfunctioning parathyroid glands in primary hyperparathyroidism — superior to sestamibi SPECT and ultrasound, especially for small, ectopic, or multigland disease. Indispensable for surgical planning in persistent or recurrent hyperparathyroidism.</p>
            <div className={styles.tagContainer}>
              <span className={styles.serviceTag}>ENDOCRINOLOGY / SURGERY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Targeted Radionuclide Therapies Section */}
      <section className={`section-padding ${styles.therapySection}`}>
        <div className="container">
          <h2 className={styles.therapySectionTitle}>TARGETED RADIONUCLIDE THERAPIES</h2>
          
          <div className={styles.therapyCardsGrid}>
            {/* Card 1 */}
            <div className={styles.therapyMainCard}>
              <h3>I-131 Radioiodine Therapy</h3>
              <p>Oral radioiodine for thyroid remnant ablation, differentiated thyroid cancer metastases, Graves' disease, and toxic goitre.</p>
              <div className={styles.tagContainer}>
                <span className={styles.therapyTag}>THERAPY - THYROIDOLOGY</span>
              </div>
            </div>
            {/* Card 2 */}
            <div className={styles.therapyMainCard}>
              <h3>Radioligand Therapies (RLT)</h3>
              <p>Lu-177 PSMA and PRRT - precision molecular therapies delivering targeted radiation directly to tumour cells.</p>
              <div className={styles.tagContainer}>
                <span className={styles.therapyTag}>THERAPY - THERANOSTICS</span>
              </div>
            </div>
          </div>

          {/* I-131 Detail Panel */}
          <div className={styles.therapyDetailPanel}>
            <div className={styles.panelHeader}>
              <h3>I-131 Therapy — In Detail</h3>
              <p className={styles.panelSubtitle}>IODINE-131 • BETA EMITTER • THYROID-TARGETED TREATMENT</p>
            </div>
            <div className={styles.panelColumns}>
              <div>
                <h4>INDICATIONS</h4>
                <ul>
                  <li>Post-thyroidectomy remnant ablation</li>
                  <li>Metastatic differentiated thyroid cancer</li>
                  <li>Graves' disease</li>
                  <li>Toxic multinodular goitre</li>
                </ul>
                <h4 style={{ marginTop: '1.5rem' }}>HOW IT WORKS</h4>
                <p>I-131 is taken up by thyroid tissue via the NIS transporter. Beta emission delivers lethal radiation selectively to thyroid/cancer cells, sparing surrounding tissue.</p>
              </div>
              <div>
                <h4>PREPARATION</h4>
                <ul>
                  <li>Low-iodine diet 2 weeks prior</li>
                  <li>TSH stimulation (withdrawal or rhTSH)</li>
                  <li>TSH confirmed &gt;30 mIU/L before therapy</li>
                  <li>Pregnancy test where indicated</li>
                </ul>
                <h4 style={{ marginTop: '1.5rem' }}>POST-THERAPY</h4>
                <ul>
                  <li>Radiation isolation per AERB guidelines</li>
                  <li>Post-therapy whole-body scan (5-7 days)</li>
                  <li>Thyroid hormone replacement commenced</li>
                  <li>Follow-up thyroglobulin at 6-12 months</li>
                </ul>
              </div>
            </div>
          </div>

          {/* RLT Detail Panel */}
          <div className={styles.therapyDetailPanel}>
            <div className={styles.panelHeader}>
              <h3>Radioligand Therapies — In Detail</h3>
              <p className={styles.panelSubtitle}>LU-177 • THERANOSTICS • TARGETED MOLECULAR TREATMENT</p>
            </div>
            <div className={styles.panelColumns}>
              <div>
                <h4>LU-177 PSMA</h4>
                <ul>
                  <li>Metastatic castration-resistant prostate cancer</li>
                  <li>PSMA PET-positive disease required</li>
                  <li>Every 6 weeks, up to 6 cycles</li>
                  <li>VISION trial: +4 months median OS</li>
                </ul>
                <h4 style={{ marginTop: '1.5rem' }}>ELIGIBILITY</h4>
                <ul>
                  <li>eGFR &gt;40 ml/min</li>
                  <li>Adequate bone marrow reserve</li>
                  <li>ECOG PS 0-2</li>
                  <li>Receptor-positive on PET</li>
                </ul>
              </div>
              <div>
                <h4>LU-177 DOTATATE (PRRT)</h4>
                <ul>
                  <li>Progressive GEP-NETs</li>
                  <li>DOTANOC PET eligibility required</li>
                  <li>4 cycles every 8 weeks</li>
                  <li>NETTER-1 trial: significant PFS benefit</li>
                </ul>
                <h4 style={{ marginTop: '1.5rem' }}>PROCESS</h4>
                <ul>
                  <li>MDT review and counselling</li>
                  <li>Pre-therapy dosimetry where indicated</li>
                  <li>Day-care or short admission</li>
                  <li>Post-therapy SPECT biodistribution scan</li>
                </ul>
              </div>
            </div>
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
