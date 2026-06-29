import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import productHuntLogo from '../images/productHuntLogo.png';
import ScrollReveal from './ScrollReveal';

const pressCard = {
  background: 'rgba(255, 255, 255, 0.06)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  p: 4,
  minHeight: 90,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  flex: 1,
  ':hover': {
    background: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
  },
};

const Press = () => {
  return (
    <Box
      id="press"
      sx={{
        maxWidth: 1200,
        mx: 'auto',
        px: { xs: 2, md: 4 },
        pt: 8,
        position: 'relative',
        zIndex: 130,
      }}
    >
      <ScrollReveal>
      <Typography
        variant="h2"
        textAlign="center"
        sx={{
          fontFamily: 'Outfit',
          fontSize: { xs: '2.5rem', md: '3.5rem' },
          fontWeight: 600,
          color: 'white',
          mt: 10,
          mb: 6,
          textShadow: '1px 1px 5px rgba(0,0,0,0.5)',
        }}
      >
        Read Our Press
      </Typography>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
      <Box
        id="pressimages"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'stretch',
          gap: 3,
          mb: 32,
          mx: 'auto',
        }}
      >
        <Box
          sx={pressCard}
          onClick={() => window.open('https://medium.com/@kaptnapp/')}
        >
          <Typography
            sx={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: { xs: 36, md: 48 },
              fontWeight: 400,
              color: '#fff',
              letterSpacing: '-1px',
            }}
          >
            Medium
          </Typography>
        </Box>
        <Box
          sx={pressCard}
          onClick={() => window.open('https://www.producthunt.com/products/kaptn')}
        >
          <Typography
            sx={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: { xs: 28, md: 36 },
              fontWeight: 600,
              color: '#DA552F',
              letterSpacing: '-0.5px',
              whiteSpace: 'nowrap',
            }}
          >
            Product Hunt
          </Typography>
        </Box>
      </Box>
      </ScrollReveal>
    </Box>
  );
};

export default Press;
