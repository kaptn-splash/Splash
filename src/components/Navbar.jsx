import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Features from './Features';
import Team from './Team';

export default function Navbar() {
  return (
    <Grid
    id='nav-bar'>
    <Box>
      <AppBar style={{ 
        background: '#22145a',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end'
    }}>
        <Toolbar>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Meet the Team</Button>
          <Button color="inherit" href='https://github.com/oslabs-beta/kaptn' target='_blank'>Github</Button>
          <Button color="inherit">Download</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </Grid>
  );
}