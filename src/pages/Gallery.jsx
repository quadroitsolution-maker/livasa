import { useState } from 'react';
import { X } from 'lucide-react';
import styles from './Gallery.module.css';

import gallery1 from '../assets/gallery/gallery-1.jpg';
import gallery2 from '../assets/gallery/gallery-2.jpg';
import gallery3 from '../assets/gallery/gallery-3.jpg';
import gallery4 from '../assets/gallery/gallery-4.jpg';
import gallery5 from '../assets/gallery/gallery-5.jpg';

const galleryImages = [
  { src: gallery1, alt: 'PET-CT Scanner Room', caption: 'State-of-the-Art PET-CT Scanner' },
  { src: gallery2, alt: 'Livasa Med Centre Building', caption: 'Our Centre – Livasa Med Care' },
  { src: gallery3, alt: 'Waiting Area', caption: 'Where Technology Brings You Clarity' },
  { src: gallery4, alt: 'Centre Stairway & Interior', caption: 'Warm & Welcoming Interiors' },
  { src: gallery5, alt: 'Caring Hands Corridor', caption: "You're In Caring Hands" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  const openLightbox = (index) => setLightbox({ open: true, index });
  const closeLightbox = () => setLightbox({ open: false, index: 0 });

  const goNext = () =>
    setLightbox((prev) => ({ ...prev, index: (prev.index + 1) % galleryImages.length }));
  const goPrev = () =>
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + galleryImages.length) % galleryImages.length,
    }));

  return (
    <div className={styles.galleryPage}>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <h1>Our Facility</h1>
          <p>Take a virtual tour of our state-of-the-art diagnostic centre.</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className={`section-padding ${styles.gallerySection}`}>
        <div className="container">
          <div className={styles.galleryGrid}>
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={styles.galleryItem}
                onClick={() => openLightbox(index)}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className={styles.imageOverlay}>
                  <span className={styles.caption}>{image.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox.open && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.lightboxClose} onClick={closeLightbox}>
            <X size={28} />
          </button>
          <button
            className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >
            ‹
          </button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[lightbox.index].src}
              alt={galleryImages[lightbox.index].alt}
            />
            <p className={styles.lightboxCaption}>
              {galleryImages[lightbox.index].caption}
            </p>
          </div>
          <button
            className={`${styles.lightboxNav} ${styles.lightboxNext}`}
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
