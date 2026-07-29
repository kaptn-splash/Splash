import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import krane from '../../images/krangeGif2.gif';
import dashboard from '../../images/dashboardnew.jpg';
import setup from '../../images/setuppage.jpg';
import metrics from '../../images/v3/kaptnClusterMetricsPage-2-v3.jpg';
import helpdesk from '../../images/helpdesk.gif';
import lightmode from '../../images/lightmode.gif';

const features = [
  {
    title: 'Kaptn Krane',
    body: 'View live metrics and historical graphs, scale, restart, and roll out pods, nodes, and deployments — with speedometer-style gauges, namespace filtering, and sorting by CPU and memory.',
    img: krane,
  },
  {
    title: 'User-friendly terminal',
    body: 'Take command of the command line with pre-configured kubectl options, or free-type into our CLI. Clearly visualize your commands with improved readability.',
    img: dashboard,
  },
  {
    title: 'Quick Kubernetes setup',
    body: 'Create a Docker image or upload your own, then generate a custom YAML file personalized to your project — shortening tedious setup so you can start working with your clusters.',
    img: setup,
  },
  {
    title: 'Cluster metrics visualization',
    body: 'Sync your workspace to Grafana and Prometheus for clear, real-time visualization of cluster health — Kaptn is your single stop for monitoring Kubernetes.',
    img: metrics,
  },
  {
    title: 'Help & learning resources',
    body: 'Get help for any command at the click of a button with the Instant Help Desk, or follow tutorials and master Kubernetes with the Learning Center.',
    img: helpdesk,
  },
  {
    title: 'Light mode & dark mode',
    body: 'Whether it’s eye strain or personal preference, switch between light and dark themes so you can focus on your workflow with no distractions.',
    img: lightmode,
  },
];

const ScrollFeatures = () => {
  const [active, setActive] = useState(0);
  // `displayed` trails `active`: on every change the current image fades out,
  // the stage holds empty for a beat, then the new image dissolves in
  const [displayed, setDisplayed] = useState(0);
  const firstRun = useRef(true);
  const leftRef = useRef(null);

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return undefined;
    }
    setDisplayed(null);
    const t = setTimeout(() => setDisplayed(active), 600); // 0.2s fade-out + 0.4s blank
    return () => clearTimeout(t);
  }, [active]);

  // warm the GIF cache for steps 5/6: start downloading at the earliest of
  // (a) the page finishing its critical load or (b) the user's first
  // scroll/touch — never competing with first paint, but always several
  // screens ahead of the features section
  useEffect(() => {
    let warmed = false;
    const warm = () => {
      if (warmed) return;
      warmed = true;
      [helpdesk, lightmode].forEach((src) => {
        const img = new Image();
        img.src = src;
      });
      window.removeEventListener('load', warm);
      window.removeEventListener('scroll', warm);
      window.removeEventListener('touchstart', warm);
    };
    if (document.readyState === 'complete') {
      warm();
      return undefined;
    }
    window.addEventListener('load', warm, { once: true });
    window.addEventListener('scroll', warm, { passive: true, once: true });
    window.addEventListener('touchstart', warm, { passive: true, once: true });
    return () => {
      window.removeEventListener('load', warm);
      window.removeEventListener('scroll', warm);
      window.removeEventListener('touchstart', warm);
    };
  }, []);

  // drive the active image straight from scroll position: the step whose
  // center is closest to the viewport center wins — deterministic, can't
  // skip steps or race the way per-element viewport observers can
  useEffect(() => {
    const onScroll = () => {
      const steps = leftRef.current?.querySelectorAll('.v3-feature-step');
      if (!steps || !steps.length) return;
      const mid = window.innerHeight / 2;
      let best = 0;
      let bestDist = Infinity;
      steps.forEach((el, i) => {
        const r = el.getBoundingClientRect();
        const dist = Math.abs(r.top + r.height / 2 - mid);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setActive((prev) => (prev === best ? prev : best));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section id="features" className="v3-container">
      <div className="v3-features">
        <div className="v3-features-left" ref={leftRef}>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="v3-feature-step"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="step-index v3-grad">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
              <img
                className="v3-feature-inline-img"
                src={f.img}
                alt={f.title}
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          ))}
        </div>
        <div className="v3-features-right">
          <div className="v3-features-sticky">
            <div className="v3-iso-stage">
              {/* all images stay mounted in a fixed-ratio stack — crossfading
                  opacity avoids layout shifts from mismatched image sizes and
                  AnimatePresence repositioning bugs inside the 3D transform */}
              <div className="v3-iso-stack">
                {features.map((f, i) => (
                  <motion.img
                    key={f.title}
                    className="v3-iso-img v3-iso-layer"
                    src={f.img}
                    alt={f.title}
                    loading="lazy"
                    decoding="async"
                    initial={false}
                    animate={{
                      opacity: displayed === i ? 1 : 0,
                      scale: displayed === i ? 1 : 0.97,
                    }}
                    transition={{
                      duration: displayed === i ? 0.5 : 0.2,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    style={{ zIndex: displayed === i ? 1 : 0 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollFeatures;
