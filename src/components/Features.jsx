import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import dashboard from '../images/dashboardnew.jpg';
import setup from '../images/setuppage.jpg';
import metrics from '../images/metrics.png';
import { Typography } from '@mui/material';
import mac from '../images/mac.png';
import microsoft from '../images/microsoft.png';
import Tilt from 'react-parallax-tilt';
import { browserName, browserVersion } from 'react-device-detect';

const Features = () => {
  let tiltValue = '5';
  if (browserName === 'Mobile Safari') tiltValue = '0';

  console.log('browserName is', browserName);

  console.log('browserVersion is', browserVersion);
  return (
    <Grid id='features'>
      <Box id='button container' width='100%'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            mb: 4,
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
                'https://github.com/oslabs-beta/kaptn/releases/download/V1.0.0/Kaptn-1.0.0-mac.dmg'
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
      <Typography
        variant='h2'
        textAlign='center'
        sx={{
          fontFamily: 'outfit',
          fontSize: 30,
          fontWeight: 800,
          letterSpacing: '1px',
          color: 'white',
          textDecoration: 'none',
          mt: 0,
          mb: 15,
          zIndex: '130',
          textShadow: '1px 1px 5px rgb(0, 0, 0, 0.4)',
        }}
      >
        FEATURING:
      </Typography>

      <Box
        id='feature1'
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          alignContent: 'center',
          marginBottom: 0,
          marginTop: '100',
          zIndex: '130',
          // bgcolor: 'red',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            zIndex: '130',
            marginRight: '5%',

            marginTop: '4.5%',
            // bgcolor: 'blue',
          }}
        >
          <Typography
            className='titles'
            variant='h4'
            sx={{
              fontFamily: 'outfit',
              fontWeight: '800',
              fontSize: '2vw',
              letterSpacing: '1px',
              color: 'white',
              textDecoration: 'none',

              textAlign: 'center',
              zIndex: '130',
              textShadow: '1px 1px 5px rgb(0, 0, 0, 0.4)',
            }}
          >
            USER-FRIENDLY TERMINAL INTERFACE
          </Typography>
          <Typography
            className='blurbs'
            variant='h5'
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 50,
              fontSize: '1.5vw',
              letterSpacing: '.1 rem',
              color: 'white',
              textDecoration: 'none',
              mt: 3,
              mb: 15,
              alignContent: 'center',

              textAlign: 'center',
              textShadow: '1px 1px 5px rgb(0, 0, 0, 0.3)',
            }}
          >
            Take command of the command line interface with our pre-configured
            kubectl options, or free type commands into our CLI
            <br />
            <br />
            Clearly visualize your commands within our interactive terminal, and
            take advantage of the improved readability
          </Typography>
        </Box>
        <Tilt
          // tiltAngleYInitial='90'
          tiltEnable='true'
          tiltMaxAngleX={tiltValue}
          tiltMaxAngleY={tiltValue}
          tiltReverse='true'
          style={{
            marginLeft: '05%',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '13',
          }}
        >
          <Box
            src={dashboard}
            component='img'
            className='image'
            sx={{
              width: '90%',
              mb: 6,
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: '1301',
              border: '1px',
              borderRadius: '2%',
              bgcolor: 'black',
              boxShadow: '0px 0px 5px 5px rgb(0, 0, 0, 0.1)',
              ':hover': {
                boxShadow: '0px 0px 17px 17px rgb(184, 34, 190, 0.5)',
              },
            }}
          ></Box>
        </Tilt>
      </Box>
      <Box
        id='feature2'
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          alignContent: 'center',
          marginBottom: 0,
          marginTop: '140px',
          zIndex: '130',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            alignText: 'center',
            zIndex: '130',
            marginLeft: '3%',
            marginTop: '4.2%',
            // bgcolor: 'blue',
          }}
        >
          <Typography
            className='titles2'
            variant='h4'
            sx={{
              fontFamily: 'outfit',
              fontWeight: '800',
              fontSize: '2vw',
              letterSpacing: '1px',
              color: 'white',
              textDecoration: 'none',
              textAlign: 'center',
              alignItems: 'center',
              zIndex: '130',
              textShadow: '1px 1px 5px rgb(0, 0, 0, 0.4)',
            }}
          >
            QUICK KUBERNETES SETUP
          </Typography>
          <Typography
            className='blurbs2'
            variant='h5'
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 50,
              fontSize: '1.5vw',
              letterSpacing: '.1 rem',
              color: 'white',
              textDecoration: 'none',
              mt: 3,
              mb: 15,
              pr: 2,
              alignContent: 'center',
              textAlign: 'center',
              textShadow: '1px 1px 5px rgb(0, 0, 0, 0.3)',
            }}
          >
            Kickstart your project by creating your own docker image or
            uploading an image using our easy setup configuration
            <br />
            <br />
            Generate a custom YAML file personalized to your projects' needs
            using a pre-configured template, allowing you to shorten tedious
            setup time and start working with your clusters
          </Typography>
        </Box>
        <Tilt
          tiltMaxAngleX={tiltValue}
          tiltMaxAngleY={tiltValue}
          tiltReverse='true'
          style={{
            marginRight: '2%',
            marginLeft: '3.5%',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '13',
          }}
        >
          <Box
            src={setup}
            component='img'
            className='image2'
            sx={{
              width: '95%',
              mb: 6,
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: '1301',
              border: '1px',
              borderRadius: '2%',
              bgcolor: 'black',
              boxShadow: '0px 0px 5px 5px rgb(0, 0, 0, 0.1)',
              ':hover': {
                boxShadow: '0px 0px 17px 17px rgb(184, 34, 190, 0.5)',
              },
            }}
          ></Box>
        </Tilt>
      </Box>
      <Box
        id='feature3'
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          alignContent: 'center',
          marginBottom: 40,
          marginTop: '100px',
          zIndex: '130',
          // bgcolor: 'red',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            zIndex: '130',
            marginRight: '5%',

            marginTop: '6%',
            // bgcolor: 'blue',
          }}
        >
          <Typography
            className='titles3'
            variant='h4'
            sx={{
              fontFamily: 'outfit',
              fontWeight: '800',
              fontSize: '2vw',
              letterSpacing: '1px',
              color: 'white',
              textDecoration: 'none',
              alignItems: 'center',
              textAlign: 'center',
              zIndex: '130',
              textShadow: '1px 1px 5px rgb(0, 0, 0, 0.4)',
            }}
          >
            CLUSTER METRICS VISUALIZATION
          </Typography>
          <Typography
            className='blurbs'
            variant='h5'
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 50,
              fontSize: '1.5vw',
              letterSpacing: '.1 rem',
              color: 'white',
              textDecoration: 'none',
              mt: 3,
              mb: 15,
              alignContent: 'center',

              textAlign: 'center',
              textShadow: '1px 1px 5px rgb(0, 0, 0, 0.3)',
            }}
          >
            Easily sync your kaptn workspace to Grafana and Prometheus to allow
            for clear and real-time visualization of your clusters' health
            <br />
            <br />
            Utilize our quick set up if you are not already connected, and
            consider kaptn your only stop for working with and monitoring your
            kubernetes clusters
          </Typography>
        </Box>
        <Tilt
          tiltMaxAngleX={tiltValue}
          tiltMaxAngleY={tiltValue}
          tiltReverse='true'
          transitionSpeed='800'
          style={{
            marginLeft: '2.5%',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '13',
          }}
        >
          <Box
            src={metrics}
            component='img'
            className='image3'
            sx={{
              width: '90%',
              mb: 6,
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: '1301',
              border: '1px',
              borderRadius: '2%',
              bgcolor: 'black',
              boxShadow: '0px 0px 5px 5px rgb(0, 0, 0, 0.1)',
              ':hover': {
                boxShadow: '0px 0px 17px 17px rgb(184, 34, 190, 0.5)',
              },
            }}
          ></Box>
        </Tilt>
      </Box>
    </Grid>
  );
};

export default Features;
