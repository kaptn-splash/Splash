import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';

const scrollTeam = () => {
  const section = document.querySelector('#TeamBio');
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const scrollFeat = () => {
  const section = document.querySelector('#features');
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const scrollDownload = () => {
  const section = document.querySelector('#download');
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default function Navbar() {
  return (
    <Grid id='nav-bar'>
      <Box>
        <AppBar
          style={{
            background: '#5538c9',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <Toolbar>
            <Button
              color='inherit'
              onClick={scrollFeat}
              sx={{
                ':hover': {
                  backgroundColor: '#3f2999',
                  color: '#ed35fe',
                },
              }}
            >
              Features
            </Button>
            <Button
              color='inherit'
              onClick={scrollTeam}
              sx={{
                ':hover': {
                  backgroundColor: '#3f2999',
                  color: '#ed35fe',
                },
              }}
            >
              Meet the Team
            </Button>
            <Button
              color='inherit'
              href='https://github.com/oslabs-beta/kaptn'
              target='_blank'
              sx={{
                ':hover': {
                  backgroundColor: '#3f2999',
                  color: '#ed35fe',
                },
              }}
            >
              Github
            </Button>
            <Button
              color='inherit'
              onClick={scrollDownload}
              sx={{
                ':hover': {
                  backgroundColor: '#3f2999',
                  color: '#ed35fe',
                },
              }}
            >
              Download
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Grid>
  );
}
