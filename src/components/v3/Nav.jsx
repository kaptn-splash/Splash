import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../images/kaptn_Logo_2.png';

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Press', href: '#press' },
  { label: 'Team', href: '#team' },
  { label: 'GitHub', href: 'https://github.com/oslabs-beta/kaptn', external: true },
];

const Nav = () => {
  const [floating, setFloating] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // float once the "available on" platforms row has scrolled out of view
      const platforms = document.querySelector('.v3-hero-platforms');
      if (!platforms) return;
      setFloating(platforms.getBoundingClientRect().bottom < 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      {/* top-of-page bar: transparent on desktop, frosted on mobile */}
      <nav className="v3-nav">
        <div
          className="v3-nav-brand"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={logo} alt="Kaptn logo" />
          <span>kaptn</span>
        </div>
        <div className="v3-nav-links">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              {l.label}
            </a>
          ))}
          <a
            className="v3-btn v3-btn-primary"
            href="https://github.com/oslabs-beta/kaptn/releases"
            target="_blank"
            rel="noreferrer"
          >
            Download
          </a>
        </div>
        <button
          className="v3-nav-burger"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="7" x2="21" y2="7" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="17" x2="21" y2="17" />
          </svg>
        </button>
      </nav>

      {/* compact floating nav — desktop, after scrolling past the hero */}
      <AnimatePresence>
        {floating && (
          <motion.nav
            className="v3-nav-float"
            initial={{ y: -28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -28, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <img
              src={logo}
              alt="Kaptn logo"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {l.label}
              </a>
            ))}
            <a
              className="v3-btn v3-btn-primary float-cta"
              href="https://github.com/oslabs-beta/kaptn/releases"
              target="_blank"
              rel="noreferrer"
            >
              Download
            </a>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="v3-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              className="v3-nav-close"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              ×
            </button>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {l.label}
              </a>
            ))}
            <a
              className="v3-btn v3-btn-primary"
              href="https://github.com/oslabs-beta/kaptn/releases"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Download
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
