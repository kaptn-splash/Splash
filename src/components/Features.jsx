import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import dashboard from '../dashboard1.png'
import setup from '../dashboard.png'
import { shadows } from '@mui/system';
import { borders } from '@mui/system';
import { Typography } from '@mui/material';



const Features = () => {
  return (
    <Grid id='features'>
        <Box id='feature1' sx={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-evenly', alignItems: 'flex-start', alignContent: 'center', mb: 40}}>
            <Box sx={{width: '45%', display: 'flex', flexDirection: 'column', justifyContent:'space-around', alignItems: 'center'}}>
                <Typography variant='h3' color='white'>
                User-friendly terminal interface
                </Typography>
                <Typography variant='h5' color='whitesmoke' textAlign='left'>
                Take command of the command line interface with pre-selected kubectl options, or free type
                </Typography>
                <Typography variant='h5' color='whitesmoke' textAlign='left'>
                Clearly visualize the commands within our interactive terminal
                </Typography>
            </Box>
            <Box src={dashboard} component='img' sx={{width: '40%', border: '1px', borderRadius: '2%',  boxShadow: '0px 0px 15px 15px rgb(255, 255, 255, 0.3)'}}></Box>
        </Box>
        <Box id='feature2' sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'flex-start', alignContent: 'center', mb: 40}}>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'space-around', alignItems: 'center'}}>
                <Typography variant='h3' color='white'>
                Quick Kubernetes Setup
                </Typography>
                <Typography variant='h5' color='white'>
                Personalized YAML file creator
                </Typography>
                <Typography variant='h5' color='white'>
                Ability to choose or create new image
                </Typography>
            </Box>
            <Box src={setup} component='img' sx={{width: '40%', border: '1px', borderRadius: '2%', boxShadow: '0px 0px 15px 15px rgb(255, 255, 255, 0.3)'}}></Box>
        </Box>
        <Box id='feature2' sx={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-evenly', alignItems: 'flex-start', alignContent: 'center', mb: 40}}>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'space-around', alignItems: 'center'}}>
                <Typography variant='h3' color='white'>
                Cluster metrics visualization
                </Typography>
                <Typography variant='h5' color='white'>
                Kubernetes API server metrics
                </Typography>
                <Typography variant='h5' color='white'>
                More coming soon...
                </Typography>
            </Box>
            <Box src={setup} component='img' sx={{width: '40%', border: '1px', borderRadius: '2%', boxShadow: '0px 0px 15px 15px rgb(255, 255, 255, 0.3)'}}></Box>
        </Box>

    </Grid>
);
}

export default Features