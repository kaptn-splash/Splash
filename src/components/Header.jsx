import React from 'react';
import { Grid, Typography } from '@mui/material';
import logo from '../images/kaptn.png';
import Box from '@mui/material/Box';


const Header = () => {
  return (
    <Grid 
        id='header'>
      <Box      
        disableEqualOverflow='true'
        style={{ 
            backgroundColor: '#120838', 
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent:'space-around',
            alignContent: 'center',
            width:'100%',
            height: '100%',
            mt: 100,}}>
        <Grid
        sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between',
            alignContent:'center',
            width: '50%'}}>
                <Box id='logo' sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent:'center', alignItems:'center'}}>
                    <Box
                    src={logo}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignContent: 'center',
                        height: '250px',
                        width: '250px',
                        mt: 10,
                    }}
                    component='img'
                    ></Box>
                </Box>
            <Box sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-around',
            alignItems: 'center'}}>  
                <Typography
                variant='h2'
                sx={{
                    fontFamily: 'Roboto',
                    fontSize: 100,
                    fontWeight: 50,
                    letterSpacing: '.1 rem',
                    color: 'white',
                    textDecoration: 'none',
                    mb: 2
                }}
                >
                kaptn
                </Typography>
                <Typography
                variant='h5'
                align='center'
                sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 50,
                    letterSpacing: '.1 rem',
                    color: 'white',
                    textDecoration: 'none',
                    mt: 1,
                    mb: 2,
                }}
                >
                Kaptn is an educational open-source tool that unlocks the full power of kubernetes command line kubectl, and helps ease the learning curve of setting up and monitoring Kubernetes clusters
                </Typography>
                <Typography
                variant='h4'
                align='center'
                sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 20,
                    letterSpacing: '.1 rem',
                    color: 'rgb(142,228,95)',
                    textDecoration: 'none',
                    mt: 1,
                    mb: 2,
                }}
                >
                    Download
                    </Typography>
            </Box>   
        </Grid> 
        </Box>       
    </Grid>
  )
}

export default Header