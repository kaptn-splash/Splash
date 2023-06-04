import Features from './components/Features';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Team from './components/Team';
import Particles from 'react-particles';
import { useCallback } from 'react';
import { loadFull } from 'tsparticles';

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <div className='App'>
      <Navbar style={{ zIndex: '1601' }} />
      <Header style={{ zIndex: '1201' }} />
      <Features style={{ zIndex: '1200' }} />
      <Team style={{ zIndex: '1401' }} />
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        style={{ zIndex: '-100', position: 'fixed' }}
        options={{
          background: {},
          fpsLimit: 300,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 170,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ed35fe',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              directions: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

export default App;
