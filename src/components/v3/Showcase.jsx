import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import shot1 from '../../images/v3/shot1.jpg';
import shot2 from '../../images/v3/shot2.jpg';
import shot3 from '../../images/v3/shot3.jpg';

const shots = [
  { src: shot2, alt: 'Kaptn Krane dashboard on a tablet' },
  { src: shot3, alt: 'Pod detail view in Kaptn' },
  { src: shot1, alt: 'Minikube node control panel in Kaptn' },
];

const Showcase = () => {
  const [openIdx, setOpenIdx] = useState(null);

  useEffect(() => {
    if (openIdx === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenIdx(null);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openIdx]);

  const handleOpen = (i) => {
    // lightbox only in row-of-three mode
    if (window.matchMedia('(min-width: 801px)').matches) setOpenIdx(i);
  };

  return (
    <section id="showcase" className="v3-showcase v3-container">
      <motion.p
        className="v3-kicker"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        Showcase
      </motion.p>
      <div className="v3-showcase-grid">
        {shots.map((s, i) => (
          <motion.img
            key={s.alt}
            src={s.src}
            alt={s.alt}
            onClick={() => handleOpen(i)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
          />
        ))}
      </div>
      <AnimatePresence>
        {openIdx !== null && (
          <motion.div
            className="v3-lightbox"
            onClick={() => setOpenIdx(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.img
              src={shots[openIdx].src}
              alt={shots[openIdx].alt}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            />
            <button
              className="v3-lightbox-close"
              aria-label="Close image"
              onClick={() => setOpenIdx(null)}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Showcase;
