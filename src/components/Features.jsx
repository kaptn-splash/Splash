import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import dashboard from '../images/dashboardnew.jpg';
import setup from '../images/setuppage.jpg';
import metrics from '../images/metrics.jpg';
import helpdesk from '../images/helpdesk.gif';
import lightmode from '../images/lightmode.gif';
import mac from '../images/mac.png';
import microsoft from '../images/microsoft.png';
import linux from '../images/linux.png';
import krane from '../images/krangeGif2.gif';
import VanillaTilt from 'vanilla-tilt';
import ScrollReveal from './ScrollReveal';

const TiltImage = ({ src, alt }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const el = tiltRef.current;
    if (el) {
      VanillaTilt.init(el, {
        max: 8,
        speed: 400,
        reverse: true,
        glare: false,
      });
    }
    return () => {
      if (el && el.vanillaTilt) el.vanillaTilt.destroy();
    };
  }, []);

  return (
    <Box
      ref={tiltRef}
      sx={{
        flex: { xs: 'none', lg: 1 },
        width: { xs: '100%', lg: 'auto' },
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: '100%',
          maxWidth: 700,
          borderRadius: '12px',
          boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.25)',
          transition: 'box-shadow 0.3s ease',
          ':hover': {
            boxShadow: '0px 8px 40px rgba(184, 34, 190, 0.4)',
          },
        }}
      />
    </Box>
  );
};

const FeatureSection = ({ id, title, description, image, reverse }) => (
  <ScrollReveal>
  <Box
    id={id}
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column-reverse', lg: reverse ? 'row-reverse' : 'row' },
      alignItems: 'center',
      gap: { xs: 4, md: 6 },
      mb: { xs: 10, md: 16 },
    }}
  >
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', lg: reverse ? 'flex-start' : 'flex-end' },
        textAlign: { xs: 'center', lg: reverse ? 'left' : 'right' },
        '& > *': { alignSelf: { xs: 'center', md: 'inherit' } },
        px: { xs: 1, md: 0 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: 'Outfit',
          fontWeight: 700,
          fontSize: { xs: '1.5rem', md: '2rem' },
          color: 'white',
          mb: 1,
          textShadow: '1px 1px 5px rgba(0,0,0,0.4)',
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          width: 60,
          height: 3,
          background: 'linear-gradient(90deg, #ed35fe, #7c3aed)',
          borderRadius: 2,
          mb: 3,
        }}
      />
      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Roboto',
          fontWeight: 300,
          fontSize: { xs: '1rem', md: '1.15rem' },
          lineHeight: 1.8,
          color: 'rgba(255,255,255,0.88)',
          maxWidth: 500,
          textShadow: '1px 1px 5px rgba(0,0,0,0.2)',
        }}
      >
        {description}
      </Typography>
    </Box>
    {image}
  </Box>
  </ScrollReveal>
);

const Features = () => {
  const helpdeskSrc = helpdesk;
  const lightmodeSrc = lightmode;
  const kraneSrc = krane;

  const platformIcons = [
    { src: mac, alt: 'macOS' },
    { src: microsoft, alt: 'Windows' },
    { src: linux, alt: 'Linux' },
  ];

  return (
    <Box id="features" sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, md: 5 }, position: 'relative', zIndex: 130 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 3,
          mb: 3,
        }}
      >
        {platformIcons.map((icon) => (
          <Box
            key={icon.alt}
            component="img"
            src={icon.src}
            alt={icon.alt}
            onClick={() => window.open('https://github.com/oslabs-beta/kaptn/releases')}
            sx={{
              width: 70,
              height: 70,
              zIndex: 130,
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              ':hover': { transform: 'scale(1.1)' },
            }}
          />
        ))}
      </Box>

      <Typography
        variant="h3"
        textAlign="center"
        sx={{
          fontFamily: 'Outfit',
          fontSize: { xs: '1.2rem', md: '1.4rem' },
          fontWeight: 600,
          letterSpacing: '2px',
          color: 'rgba(255,255,255,0.7)',
          textTransform: 'uppercase',
          mb: { xs: 8, md: 14 },
          zIndex: 130,
          textShadow: '1px 1px 5px rgba(0,0,0,0.3)',
        }}
      >
        Available on macOS, Windows & Linux
      </Typography>

      <FeatureSection
        id="feature6"
        title="Kaptn Krane"
        description="View live metrics and historical graphs, scale, delete/restart, and rollout resources like pods, nodes, and deployments in our intuitive interface that harnesses the power of kubectl commands. Featuring custom speedometer-style gauges, filtering by namespace, sorting by CPU and memory percent, and much more — taking command of Kubernetes is now easier than ever."
        reverse={false}
        image={<TiltImage src={kraneSrc} alt="Kaptn Krane" />}
      />

      <FeatureSection
        id="feature1"
        title="User-Friendly Terminal Interface"
        description="Take command of the command line with our pre-configured kubectl options, or free type commands into our CLI. Clearly visualize your commands within our interactive terminal and take advantage of improved readability."
        reverse={true}
        image={<TiltImage src={dashboard} alt="Terminal Interface" />}
      />

      <FeatureSection
        id="feature2"
        title="Quick Kubernetes Setup"
        description="Kickstart your project by creating your own Docker image or uploading an image using our easy setup configuration. Generate a custom YAML file personalized to your project's needs using a pre-configured template, allowing you to shorten tedious setup time and start working with your clusters."
        reverse={false}
        image={<TiltImage src={setup} alt="Quick Setup" />}
      />

      <FeatureSection
        id="feature3"
        title="Cluster Metrics Visualization"
        description="Easily sync your kaptn workspace to Grafana and Prometheus for clear, real-time visualization of your clusters' health. Use our quick setup if you're not already connected — kaptn is your single stop for working with and monitoring your Kubernetes clusters."
        reverse={true}
        image={<TiltImage src={metrics} alt="Cluster Metrics" />}
      />

      <FeatureSection
        id="feature4"
        title="Help & Learning Resources"
        description="Kubernetes can be difficult to learn, let alone master. So we've created special tools to aid those new to the technology. Get help information about any command at the click of a button with the Instant Help Desk, or follow tutorials and master Kubernetes with the Learning Center."
        reverse={false}
        image={<TiltImage src={helpdeskSrc} alt="Help Desk" />}
      />

      <FeatureSection
        id="feature5"
        title="Light Mode & Dark Mode"
        description="Whether it's eye strain or personal preference, we know engineers can be selective about their work environments. Switch between light and dark themes so you can focus on coding with no distractions to your workflow."
        reverse={true}
        image={<TiltImage src={lightmodeSrc} alt="Light and Dark Mode" />}
      />
    </Box>
  );
};

export default Features;
