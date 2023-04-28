import React from 'react';
import { Grid, Typography } from '@mui/material';
import logo from '../kaptn.png';
import Box from '@mui/material/Box';


const Header = () => {
  return (
    <Grid 
        id='header'>
      <Box      
        wrap='nowrap'
        disableEqualOverflow='true'
        style={{ 
        backgroundColor: '#120838', 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent:'space-around',
        alignContent: 'center',
        width:'100%',
        height: '100%',
        mt: 100}}>
    <Grid
    sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignContent:'center'}}>
            <Box
               src={logo}
               sx={{
                 height: '200px',
                 width: '200px',
                 mb: 2,
                 mt: 10,
               }}
               component='img'
             ></Box>
        <Box sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignContent:'center'}}>  
        <Typography
          variant='h3'
          sx={{
            fontFamily: 'Roboto',
            fontWeight: 50,
            letterSpacing: '.1 rem',
            color: 'white',
            textDecoration: 'none',
            mt: 10
          }}
        >
        kaptn
        </Typography>
        <Typography
          variant='h6'
          sx={{
            fontFamily: 'Roboto',
            fontWeight: 50,
            letterSpacing: '.1 rem',
            color: 'white',
            textDecoration: 'none',
            mt: 1
          }}
        >
        Short one liner
        </Typography>
        </Box>   
    </Grid> 
    </Box>       
    </Grid>
  )
}

export default Header