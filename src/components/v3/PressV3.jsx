import React from 'react';
import { motion } from 'framer-motion';

const ProductHuntIcon = () => (
  <svg viewBox="0 0 24 24" className="press-ph-icon" aria-hidden="true">
    <circle cx="12" cy="12" r="12" fill="#DA552F" />
    <path
      fill="#fff"
      d="M13.6 8.4h-3.2V12h3.2c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8zm0 6h-3.2V18H8V6h5.6c2.32 0 4.2 1.88 4.2 4.2s-1.88 4.2-4.2 4.2z"
    />
  </svg>
);

const PressV3 = () => (
  <section id="press" className="v3-press v3-container">
    <motion.p
      className="v3-kicker"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      Read our press
    </motion.p>
    <div className="v3-press-list">
      <motion.a
        className="v3-press-mark press-medium"
        href="https://medium.com/@kaptnapp/"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
        whileTap={{ scale: 0.97, transition: { duration: 0.15 } }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        Medium
      </motion.a>
      <motion.a
        className="v3-press-mark press-ph"
        href="https://www.producthunt.com/products/kaptn"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
        whileTap={{ scale: 0.97, transition: { duration: 0.15 } }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <ProductHuntIcon />
        <span>Product Hunt</span>
      </motion.a>
    </div>
  </section>
);

export default PressV3;
