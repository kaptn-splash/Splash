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

const scrollPress = () => {
  const section = document.querySelector('#press');
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
            zIndex: '35000',
          }}
        >
          <Toolbar>
            <Button
              color='inherit'
              onClick={scrollFeat}
              style={{ marginRight: '20px', fontSize: '18px' }}
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
              onClick={scrollPress}
              style={{ marginRight: '20px', fontSize: '18px' }}
              sx={{
                ':hover': {
                  backgroundColor: '#3f2999',
                  color: '#ed35fe',
                },
              }}
            >
              Press
            </Button>

            <Button
              color='inherit'
              onClick={scrollTeam}
              style={{ marginRight: '20px', fontSize: '18px' }}
              sx={{
                ':hover': {
                  backgroundColor: '#3f2999',
                  color: '#ed35fe',
                },
              }}
            >
              Team
            </Button>
            <Button
              color='inherit'
              href='https://github.com/oslabs-beta/kaptn'
              target='_blank'
              style={{ marginRight: '20px', fontSize: '18px' }}
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
              style={{ fontSize: '18px' }}
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
