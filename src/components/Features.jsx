import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import dashboard from '../dashboard1.png'
import setup from '../dashboard.png'
import { shadows } from '@mui/system';
import { borders } from '@mui/system';
import { Typography } from '@mui/material';
import {Button} from '@mui/material';
import mac from '../mac.png';
import microsoft from '../microsoft.png';


const Features = () => {
  return (
    <Grid id='features'>
        <Box id='button container' width='100%'>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', mb: 20}}>
                <Box id='buttons' component='img' src={mac} onClick={() => window.open('http://www.google.com')} sx={{width: '150px', height: '150px'}}></Box>
                <Box id='buttons' component='img' src={microsoft} sx={{width: '150px', height: '150px'}}></Box>            
            </Box>
        </Box>
        <Box id='feature1' sx={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-evenly', alignItems: 'flex-start', alignContent: 'center', mb: 20}}>
            <Box sx={{width: '45%', display: 'flex', flexDirection: 'column', justifyContent:'space-around', alignItems: 'flex-start'}}>
            <Typography
                variant='h3'
                sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 50,
                    letterSpacing: '.1 rem',
                    color: 'white',
                    textDecoration: 'none',
                }}
                >                
                User-friendly terminal interface
                </Typography>
                <Typography
                variant='h6'
                sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 50,
                    letterSpacing: '.1 rem',
                    color: 'white',
                    textDecoration: 'none',
                    mt: 10,
                    mb: 5,
                    alignContent: 'center'
                }}
                >                
                Take command of the command line interface with pre-selected kubectl options
                </Typography>
                <Typography
                variant='h6'
                sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 50,
                    letterSpacing: '.1 rem',
                    color: 'white',
                    textDecoration: 'none',
                    mt: 1,
                    mb: 20,
                    alignContent: 'center'
                }}
                >                
                Clearly visualize the commands within our interactive terminal
                </Typography>
            </Box>
            <Box src={dashboard} component='img' sx={{width: '40%', border: '1px', borderRadius: '2%',  boxShadow: '0px 0px 15px 15px rgb(255, 255, 255, 0.3)', ':hover': { width: '43%', boxShadow: '0px 0px 15px 15px rgb(142, 228, 95, 0.3)'}}}></Box>
        </Box>
        <Box id='feature2' sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'flex-start', alignContent: 'center', mb: 20}}>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'space-around', alignItems: 'flex-end'}}>
            <Typography
                variant='h3'
                sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 50,
                    letterSpacing: '.1 rem',
                    color: 'white',
                    textDecoration: 'none',
                }}
                >                    
                Quick Kubernetes Setup
                </Typography>
                <Typography
                variant='h6'
                sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 50,
                    letterSpacing: '.1 rem',
                    color: 'white',
                    textDecoration: 'none',
                    mt: 10,
                    mb: 5,
                    alignContent: 'center'
                }}
                >                       
                Personalized YAML file creator
                </Typography>
                <Typography
                variant='h6'
                sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 50,
                    letterSpacing: '.1 rem',
                    color: 'white',
                    textDecoration: 'none',
                    mt: 1,
                    alignContent: 'center'
                }}
                >                       
                Ability to choose or create new image
                </Typography>
            </Box>
            <Box src={setup} component='img' sx={{width: '40%', border: '1px', borderRadius: '2%', boxShadow: '0px 0px 15px 15px rgb(255, 255, 255, 0.3)', ':hover': { width: '43%', boxShadow: '0px 0px 15px 15px rgb(142, 228, 95, 0.3)'}}}></Box>
        </Box>
        <Box id='feature3' sx={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-evenly', alignItems: 'flex-start', alignContent: 'center', mb: 20}}>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'space-around', alignItems: 'flex-start'}}>
            <Typography
                variant='h3'
                sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 50,
                    letterSpacing: '.1 rem',
                    color: 'white',
                    textDecoration: 'none',
                }}
                >                  
                Cluster metrics visualization
                </Typography>
                <Typography
                variant='h6'
                sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 50,
                    letterSpacing: '.1 rem',
                    color: 'white',
                    textDecoration: 'none',
                    mt: 10,
                    mb: 5,
                    alignContent: 'center'
                }}
                >                       
                Kubernetes API server metrics
                </Typography>
                <Typography
                variant='h6'
                sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 50,
                    letterSpacing: '.1 rem',
                    color: 'white',
                    textDecoration: 'none',
                    mt: 1,
                    alignContent: 'center'
                }}
                >                       
                More coming soon...
                </Typography>
            </Box>
            <Box src={setup} component='img' sx={{width: '40%', border: '1px', borderRadius: '2%', boxShadow: '0px 0px 15px 15px rgb(255, 255, 255, 0.3)', ':hover': { width: '43%', boxShadow: '0px 0px 15px 15px rgb(142, 228, 95, 0.3)'}}}></Box>
        </Box>
    </Grid>
);
}

export default Features