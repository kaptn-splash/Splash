import React, { useRef } from 'react';
import logo from '../../images/kaptn_Logo_2.png';

const FooterV3 = () => {
  const wmRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = wmRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <footer className="v3-footer">
      <div className="v3-container">
        <div className="v3-footer-meta">
          <div className="v3-footer-brandcol">
            <img src={logo} alt="Kaptn logo" />
            <span>© 2026 kaptn — open source</span>
          </div>
          <div className="col">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a
              href="https://github.com/oslabs-beta/kaptn/releases"
              target="_blank"
              rel="noreferrer"
            >
              Download
            </a>
            <a
              href="https://github.com/oslabs-beta/kaptn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="col">
            <h4>Press</h4>
            <a
              href="https://medium.com/@kaptnapp/"
              target="_blank"
              rel="noreferrer"
            >
              Medium
            </a>
            <a
              href="https://www.producthunt.com/products/kaptn"
              target="_blank"
              rel="noreferrer"
            >
              Product Hunt
            </a>
          </div>
        </div>
      </div>
      <div
        ref={wmRef}
        className="v3-footer-wordmark"
        onMouseMove={handleMouseMove}
      >
        <span className="wm-base">kaptn</span>
        <span className="wm-light" aria-hidden="true">
          kaptn
        </span>
      </div>
    </footer>
  );
};

export default FooterV3;
