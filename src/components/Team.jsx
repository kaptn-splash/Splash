import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import linkedInPng from '../images/linkedin.png';
import githubPng from '../images/gh.png';
import natalie from '../images/natalie.png';
import yining from '../images/yining.png';
import olivia from '../images/olivia.png';
import john from '../images/john.png';
import brecht from '../images/brecht.png';
import ScrollReveal from './ScrollReveal';

const teamMembers = [
  { name: 'Brecht Horn', img: brecht, linkedin: 'https://www.linkedin.com/in/brecht-horn-a9b839213/', github: 'https://www.github.com/brecht-horn' },
  { name: 'Hwi Won (John) Choi', img: john, linkedin: 'https://www.linkedin.com/in/hwi-won-choi-057081191/', github: 'https://github.com/jhwiwonc' },
  { name: 'Natalie Cordoves', img: natalie, linkedin: 'https://www.linkedin.com/in/natalie-cordoves', github: 'https://www.github.com/ncordoves' },
  { name: 'Olivia Hodel', img: olivia, linkedin: 'https://www.linkedin.com/in/olivia-hodel/', github: 'https://www.github.com/ohodel' },
  { name: 'Yining Wang', img: yining, linkedin: 'https://www.linkedin.com/in/yining-wang-83b896108/', github: 'https://www.github.com/yiningcw' },
];

const memberCard = {
  background: 'rgba(255, 255, 255, 0.06)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  borderRadius: '20px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  ':hover': {
    background: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-6px)',
    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.2)',
  },
};

const iconStyle = {
  width: 36,
  height: 36,
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  ':hover': { transform: 'scale(1.15)' },
};

const Team = () => {
  return (
    <Box
      id="TeamBio"
      sx={{
        maxWidth: 1200,
        mx: 'auto',
        px: { xs: 2, md: 4 },
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
        Meet Our Engineering Team
      </Typography>
      </ScrollReveal>
      <Box
        id="members"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 3,
          mb: 10,
        }}
      >
        {teamMembers.map((member, index) => (
          <ScrollReveal key={member.name} delay={index * 0.1}>
          <Box sx={{ ...memberCard, width: { xs: '100%', sm: 340 } }}>
            <Box
              component="img"
              src={member.img}
              alt={member.name}
              sx={{
                width: 180,
                height: 180,
                borderRadius: '50%',
                mb: 2.5,
                border: '3px solid rgba(237, 53, 254, 0.3)',
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Outfit',
                fontWeight: 600,
                fontSize: '1.3rem',
                color: 'white',
                mb: 0.5,
              }}
            >
              {member.name}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 300,
                fontSize: '0.95rem',
                color: 'rgba(255,255,255,0.7)',
                mb: 2.5,
              }}
            >
              Software Engineer
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box
                component="img"
                src={linkedInPng}
                alt="LinkedIn"
                onClick={() => window.open(member.linkedin)}
                sx={iconStyle}
              />
              <Box
                component="img"
                src={githubPng}
                alt="GitHub"
                onClick={() => window.open(member.github)}
                sx={iconStyle}
              />
            </Box>
          </Box>
          </ScrollReveal>
        ))}
      </Box>
    </Box>
  );
};

export default Team;
