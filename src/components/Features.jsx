import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import dashboard from '../images/dashboardnew.jpg';
import setup from '../images/setuppage.jpg';
import metrics from '../images/metrics.png';
import { Typography } from '@mui/material';
import mac from '../images/mac.png';
import microsoft from '../images/microsoft.png';

const Features = () => {
  return (
    <Grid id='features'>
      <Box id='button container' width='100%'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            mb: 10,
          }}
        >
          <Box
            id='buttonsDL'
            component='img'
            src={mac}
            onClick={() =>
              window.open(
                'https://github.com/oslabs-beta/kaptn/releases/download/V1.0.0/Kaptn-1.0.0-mac.dmg'
              )
            }
            sx={{
              width: '90px',
              height: '90px',
              zIndex: '130',
              ':hover': 'pointer',
            }}
          ></Box>
          <Box
            id='buttonsDL'
            component='img'
            src={microsoft}
            onClick={() =>
              window.open(
                'https://github.com/oslabs-beta/kaptn/releases/download/V1.0.0/kaptn-1.0.0-win-arm64.exe'
              )
            }
            sx={{
              width: '90px',
              height: '90px',
              paddingTop: '5px',
              zIndex: '130',
            }}
          ></Box>
        </Box>
      </Box>
      <Box
        id='feature1'
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          alignContent: 'center',
          mb: 0,
          zIndex: '130',
          // bgcolor: 'red',
        }}
      >
        <Box
          sx={{
            width: '45%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            zIndex: '130',
            // bgcolor: 'blue',
          }}
        >
          <Typography
            variant='h3'
            sx={{
              fontFamily: 'Roboto',
              fontWeight: '100',
              letterSpacing: '.1 rem',
              color: 'white',
              textDecoration: 'none',
              zIndex: '130',
              textShadow: '1px 1px 5px rgb(0, 0, 0, 0.3)',
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
              alignContent: 'center',
              textShadow: '1px 1px 5px rgb(0, 0, 0, 0.3)',
            }}
          >
            Take command of the command line interface with our pre-cofigured
            kubectl options, or free type commands into our CLI
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
              alignContent: 'center',
              zIndex: '130',
              textShadow: '1px 1px 5px rgb(0, 0, 0, 0.3)',
            }}
          >
            Clearly visualize your commands within our interactive terminal, and
            take advantage of the increased readability
          </Typography>
        </Box>
        <Box
          src={dashboard}
          component='img'
          sx={{
            width: '40%',
            zIndex: '130',
            border: '1px',
            borderRadius: '2%',
            bgcolor: 'black',
            boxShadow: '0px 0px 5px 5px rgb(0, 0, 0, 0.1)',
            ':hover': {
              width: '43%',
              boxShadow: '0px 0px 17px 17px rgb(184, 34, 190, 0.5)',
            },
          }}
        ></Box>
      </Box>
      <Box
        id='feature2'
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          alignContent: 'center',
          mb: 20,
          zIndex: '130',
        }}
      >
        <Box
          sx={{
            width: '45%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
            zIndex: '130',
          }}
        >
          <Typography
            variant='h3'
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 50,
              letterSpacing: '.1 rem',
              color: 'white',
              textDecoration: 'none',
              zIndex: '130',
              textShadow: '1px 1px 5px rgb(0, 0, 0, 0.3)',
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
              alignContent: 'center',
              zIndex: '130',
              textShadow: '1px 1px 5px rgb(0, 0, 0, 0.3)',
            }}
          >
            Kickstart your project by creating your own docker image or
            uploading an image using our easy setup configuration
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
              alignContent: 'center',
              zIndex: '130',
              textShadow: '1px 1px 5px rgb(0, 0, 0, 0.3)',
            }}
          >
            Generate a custom YAML file personalized to your projects' needs
            using a pre-configured template, allowing you to shorten tedious
            setup time and start working with your clusters
          </Typography>
        </Box>
        <Box
          src={setup}
          component='img'
          sx={{
            width: '40%',
            zIndex: '130',
            border: '1px',
            borderRadius: '2%',
            boxShadow: '0px 0px 5px 5px rgb(0, 0, 0, 0.1)',
            ':hover': {
              width: '43%',
              boxShadow: '0px 0px 17px 17px rgb(184, 34, 190, 0.5)',
            },
          }}
        ></Box>
      </Box>
      <Box
        id='feature3'
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          alignContent: 'center',
          mb: 20,
          zIndex: '130',
        }}
      >
        <Box
          sx={{
            width: '45%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            zIndex: '130',
          }}
        >
          <Typography
            variant='h3'
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 50,
              letterSpacing: '.1 rem',
              color: 'white',
              textDecoration: 'none',
              zIndex: '130',
              textShadow: '1px 1px 5px rgb(0, 0, 0, 0.3)',
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
              alignContent: 'center',
              zIndex: '130',
              textShadow: '1px 1px 5px rgb(0, 0, 0, 0.3)',
            }}
          >
            Easily sync your kaptn workspace to Grafana and Prometheus to allow
            for clear and real-time visualization of your clusters' health
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
              alignContent: 'center',
              zIndex: '130',
              textShadow: '1px 1px 5px rgb(0, 0, 0, 0.3)',
            }}
          >
            Utilize our quick set up if you are not already connected, and
            consider kaptn your only stop for working with and monitoring your
            kubernetes clusters
          </Typography>
        </Box>
        <Box
          src={metrics}
          component='img'
          sx={{
            width: '40%',
            zIndex: '130',
            border: '1px',
            borderRadius: '2%',
            boxShadow: '0px 0px 5px 5px rgb(0, 0, 0, 0.1)',
            ':hover': {
              width: '43%',
              boxShadow: '0px 0px 17px 17px rgb(184, 34, 190, 0.5)',
            },
          }}
        ></Box>
      </Box>
    </Grid>
  );
};

export default Features;
