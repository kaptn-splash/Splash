import React from 'react';
import { motion } from 'framer-motion';

const IntroStatement = () => (
  <section className="v3-intro v3-container">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <span className="v3-grad">Kubernetes, made human</span>
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
    >
      Kaptn is the desktop bridge to your clusters — guided setup, a
      supercharged terminal, live metrics, and one-click control of pods,
      nodes, and deployments. All in one open-source interface.
    </motion.p>
  </section>
);

export default IntroStatement;
