import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from '../images/kaptn_Logo_2.png';
import ScrollReveal from './ScrollReveal';

const Header = () => {
  return (
    <Box
      id="header"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: { xs: 'auto', md: '90vh' },
        px: { xs: 2, md: 3 },
        py: { xs: 6, md: 0 },
        textAlign: 'center',
      }}
    >
      <ScrollReveal direction="none" duration={1}>
        <Box
          sx={{
            perspective: '800px',
            mb: 3,
            position: 'relative',
            zIndex: 1300,
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Kaptn logo"
          sx={{
            height: { xs: 260, md: 350 },
            width: { xs: 260, md: 350 },
            zIndex: 1300,
            position: 'relative',
            animation: 'logoHelm 20s ease-in-out infinite',
            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.35))',
            '@keyframes logoHelm': {
              '0%':    { transform: 'rotateY(0deg) rotate(0deg)' },
              '8%':    { transform: 'rotateY(6deg) rotate(5deg)' },
              '16%':   { transform: 'rotateY(12deg) rotate(-4deg)' },
              '25%':   { transform: 'rotateY(18deg) rotate(4deg)' },
              '33%':   { transform: 'rotateY(12deg) rotate(-3deg)' },
              '42%':   { transform: 'rotateY(6deg) rotate(4deg)' },
              '50%':   { transform: 'rotateY(0deg) rotate(-4deg)' },
              '58%':   { transform: 'rotateY(-6deg) rotate(4deg)' },
              '67%':   { transform: 'rotateY(-12deg) rotate(-3deg)' },
              '75%':   { transform: 'rotateY(-18deg) rotate(4deg)' },
              '83%':   { transform: 'rotateY(-12deg) rotate(-4deg)' },
              '92%':   { transform: 'rotateY(-6deg) rotate(3deg)' },
              '100%':  { transform: 'rotateY(0deg) rotate(0deg)' },
            },
          }}
          />
        </Box>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'baseline',
          gap: 2,
          zIndex: 1300,
          position: 'relative',
          mb: 3,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: 'Outfit',
            fontSize: { xs: 56, md: 80 },
            fontWeight: 600,
            color: '#f5f5f5',
            letterSpacing: '-1px',
            textShadow: '2px 2px 10px rgba(0,0,0,0.5)',
          }}
        >
          kaptn
        </Typography>

        <Box
          sx={{
            fontFamily: 'Outfit',
            fontSize: { xs: 28, md: 40 },
            fontWeight: 400,
            color: '#ed35fe',
            textShadow: '2px 2px 10px rgba(0,0,0,0.5)',
          }}
        >
          v2.0.1
        </Box>
      </Box>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'Roboto',
          fontWeight: 300,
          fontSize: { xs: '1.1rem', md: '1.5rem' },
          lineHeight: 1.7,
          color: 'rgba(245, 245, 245, 0.9)',
          maxWidth: 680,
          zIndex: 130,
          textShadow: '1px 1px 5px rgba(0,0,0,0.3)',
          mb: 5,
        }}
      >
        Unlock the full power of Kubernetes — easily initialize,
        monitor, and manage your clusters with an intuitive desktop interface.
      </Typography>
      </ScrollReveal>

      <ScrollReveal delay={0.6}>
      <Box
        id="download"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
          zIndex: 130,
        }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={() =>
            window.open('https://github.com/oslabs-beta/kaptn/releases')
          }
          sx={{
            fontFamily: 'Outfit',
            fontSize: 16,
            fontWeight: 600,
            textTransform: 'none',
            px: 4,
            py: 1.5,
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #ed35fe 0%, #7c3aed 100%)',
            color: '#fff',
            boxShadow: '0 4px 24px rgba(237, 53, 254, 0.4)',
            transition: 'all 0.3s ease',
            ':hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 32px rgba(237, 53, 254, 0.5)',
            },
          }}
        >
          Download Now
        </Button>
        <Button
          variant="outlined"
          size="large"
          startIcon={<GitHubIcon />}
          href="https://github.com/oslabs-beta/kaptn"
          target="_blank"
          sx={{
            fontFamily: 'Outfit',
            fontSize: 16,
            fontWeight: 500,
            textTransform: 'none',
            px: 4,
            py: 1.5,
            borderRadius: '12px',
            borderColor: 'rgba(255,255,255,0.25)',
            color: '#fff',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            ':hover': {
              borderColor: 'rgba(255,255,255,0.5)',
              backgroundColor: 'rgba(255,255,255,0.08)',
              transform: 'translateY(-2px)',
            },
          }}
        >
          View on GitHub
        </Button>
      </Box>
      </ScrollReveal>
    </Box>
  );
};

export default Header;
