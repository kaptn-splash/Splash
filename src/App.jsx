import React from 'react';
import Nav from './components/v3/Nav';
import Hero from './components/v3/Hero';
import IntroStatement from './components/v3/IntroStatement';
import LetterReveal from './components/v3/LetterReveal';
import ScrollFeatures from './components/v3/ScrollFeatures';
import Showcase from './components/v3/Showcase';
import PressV3 from './components/v3/PressV3';
import TeamV3 from './components/v3/TeamV3';
import FooterV3 from './components/v3/FooterV3';
import './components/v3/v3.scss';

function App() {
  return (
    <div className="App v3">
      <div className="v3-bg" />
      <div className="v3-blobs" aria-hidden="true">
        <div className="v3-blob v3-blob--indigo" style={{ top: '1%', left: '-8%' }} />
        <div className="v3-blob v3-blob--violet" style={{ top: '5%', right: '-6%' }} />
        <div className="v3-blob v3-blob--navy" style={{ top: '18%', left: '-6%' }} />
        <div className="v3-blob v3-blob--magenta" style={{ top: '30%', right: '-4%' }} />
        <div className="v3-blob v3-blob--violet" style={{ top: '44%', left: '20%' }} />
        <div className="v3-blob v3-blob--navy" style={{ top: '58%', right: '-6%' }} />
        <div className="v3-blob v3-blob--pink" style={{ top: '72%', left: '-4%' }} />
        <div className="v3-blob v3-blob--indigo" style={{ top: '88%', right: '-6%' }} />
      </div>
      <div className="v3-grain" />
      <Nav />
      <main>
        <Hero />
        <div className="v3-glow-divider" />
        <IntroStatement />
        <LetterReveal text="Your always-on bridge to every cluster — setup, control, and monitoring in one place." />
        <ScrollFeatures />
        <div className="v3-glow-divider" />
        <Showcase />
        <PressV3 />
        <div className="v3-glow-divider" />
        <TeamV3 />
        <div className="v3-glow-divider" />
        <div className="v3-cta-final">
          <LetterReveal text="Take command." />
          <div className="v3-hero-ctas">
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
          </div>
        </div>
      </main>
      <FooterV3 />
    </div>
  );
}

export default App;
