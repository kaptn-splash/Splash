import React from 'react';
import { motion } from 'framer-motion';
import logo from '../../images/kaptn_Logo_2.png';
import startPage from '../../images/v3/kaptnv3StartPage-v2.gif';
import mac from '../../images/mac.png';
import microsoft from '../../images/microsoft.png';
import linux from '../../images/linux.png';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const Hero = () => (
  <header className="v3-hero">
    <div className="v3-container v3-hero-inner">
      <div className="v3-hero-text">
        <motion.div
          className="v3-hero-brandrow"
          {...fadeUp}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img src={logo} alt="Kaptn logo" />
          <span className="v3-wordmark">kaptn</span>
        </motion.div>
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Take <span className="v3-grad">command</span> of Kubernetes
        </motion.h1>
        <motion.p
          className="v3-hero-sub"
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Initialize, monitor, and manage your clusters with an intuitive
          desktop interface — from guided setup to live metrics.
        </motion.p>
        <motion.div
          className="v3-hero-ctas"
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.36, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <a
            className="v3-btn v3-btn-primary"
            href="https://github.com/oslabs-beta/kaptn/releases"
            target="_blank"
            rel="noreferrer"
          >
            Download Now
          </a>
          <a
            className="v3-btn v3-btn-ghost"
            href="https://github.com/oslabs-beta/kaptn"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </motion.div>
        <motion.div
          className="v3-hero-platforms"
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.48, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span>Available on</span>
          <img
            src={mac}
            alt="macOS"
            onClick={() => window.open('https://github.com/oslabs-beta/kaptn/releases')}
          />
          <img
            src={microsoft}
            alt="Windows"
            onClick={() => window.open('https://github.com/oslabs-beta/kaptn/releases')}
          />
          <img
            src={linux}
            alt="Linux"
            onClick={() => window.open('https://github.com/oslabs-beta/kaptn/releases')}
          />
        </motion.div>
      </div>

      <motion.div
        className="v3-tablet-scene"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="v3-tablet">
          <div className="v3-tablet-body">
            <img
              className="v3-tablet-screen"
              src={startPage}
              alt="Kaptn v3 start page"
            />
            <div className="v3-tablet-glare" />
          </div>
        </div>
      </motion.div>
    </div>
  </header>
);

export default Hero;
