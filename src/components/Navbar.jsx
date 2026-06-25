import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../images/kaptn_Logo_2.png';

const scrollTo = (selector) => {
  const section = document.querySelector(selector);
  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const navLinks = [
  { label: 'Features', action: () => scrollTo('#features') },
  { label: 'Press', action: () => scrollTo('#press') },
  { label: 'Team', action: () => scrollTo('#TeamBio') },
  { label: 'GitHub', href: 'https://github.com/oslabs-beta/kaptn', external: true },
];

const linkStyle = {
  fontFamily: 'Outfit',
  fontSize: 15,
  fontWeight: 500,
  color: 'rgba(255,255,255,0.85)',
  textTransform: 'none',
  px: 2,
  py: 0.8,
  borderRadius: '8px',
  transition: 'all 0.2s ease',
  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#ed35fe',
  },
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (action) => {
    setMobileOpen(false);
    if (action) action();
  };

  return (
    <>
      <Box
        component="nav"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 35000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: { xs: 2, md: 4 },
          py: 1.5,
          background: 'rgba(75, 35, 130, 0.35)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            cursor: 'pointer',
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Box
            component="img"
            src={logo}
            sx={{ height: 40, width: 40 }}
            alt="Kaptn logo"
          />
          <Box
            sx={{
              fontFamily: 'Outfit',
              fontSize: 22,
              fontWeight: 600,
              color: '#f5f5f5',
              letterSpacing: '0.5px',
            }}
          >
            kaptn
          </Box>
        </Box>

        {/* Desktop links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
          {navLinks.map((link) => (
            <Button
              key={link.label}
              color="inherit"
              onClick={link.action}
              href={link.external ? link.href : undefined}
              target={link.external ? '_blank' : undefined}
              sx={linkStyle}
            >
              {link.label}
            </Button>
          ))}
          <Button
            variant="outlined"
            onClick={() => scrollTo('#download')}
            sx={{
              fontFamily: 'Outfit',
              fontSize: 14,
              fontWeight: 600,
              textTransform: 'none',
              color: '#fff',
              borderColor: 'rgba(237, 53, 254, 0.6)',
              borderRadius: '10px',
              px: 2.5,
              py: 0.7,
              ml: 1,
              transition: 'all 0.25s ease',
              ':hover': {
                borderColor: '#ed35fe',
                backgroundColor: 'rgba(237, 53, 254, 0.15)',
                boxShadow: '0 0 20px rgba(237, 53, 254, 0.3)',
              },
            }}
          >
            Download
          </Button>
        </Box>

        {/* Mobile hamburger */}
        <IconButton
          onClick={() => setMobileOpen(!mobileOpen)}
          sx={{
            display: { xs: 'flex', md: 'none' },
            color: '#fff',
          }}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <Box
          sx={{
            position: 'fixed',
            top: 60,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 34999,
            background: 'rgba(30, 10, 60, 0.92)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          {navLinks.map((link) => (
            <Button
              key={link.label}
              color="inherit"
              onClick={() => handleNav(link.action)}
              href={link.external ? link.href : undefined}
              target={link.external ? '_blank' : undefined}
              sx={{
                ...linkStyle,
                fontSize: 22,
                py: 1.5,
                px: 4,
              }}
            >
              {link.label}
            </Button>
          ))}
          <Button
            variant="outlined"
            onClick={() => handleNav(() => scrollTo('#download'))}
            sx={{
              fontFamily: 'Outfit',
              fontSize: 20,
              fontWeight: 600,
              textTransform: 'none',
              color: '#fff',
              borderColor: 'rgba(237, 53, 254, 0.6)',
              borderRadius: '10px',
              px: 4,
              py: 1.2,
              mt: 2,
              ':hover': {
                borderColor: '#ed35fe',
                backgroundColor: 'rgba(237, 53, 254, 0.15)',
              },
            }}
          >
            Download
          </Button>
        </Box>
      )}
    </>
  );
}
