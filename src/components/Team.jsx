import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import linkedInPng from '../images/linkedin.png';
import githubPng from '../images/gh.png';
import natalie from '../images/natalie.png';
import yining from '../images/yining.png';
import olivia from '../images/olivia.png';
import john from '../images/john.png';
import brecht from '../images/brecht.png';

const styles = {
  icons: {
    width: '30px',
    height: '30px',
    marginLeft: '10px',
    marginRight: '10px',
    zIndex: '130',
  },
};

const Team = () => {
  return (
    <div style={{ zIndex: '1301' }}>
      <Grid
        id='TeamBio'
        justifyContent='center'
        alignItems='center'
        zIndex='1301'
      >
        <Typography
          variant='h2'
          textAlign='center'
          sx={{
            fontFamily: 'Roboto',
            fontSize: 50,
            fontWeight: 50,
            letterSpacing: '.1 rem',
            color: 'white',
            textDecoration: 'none',
            mt: 5,
            mb: 5,
            zIndex: '130',
            textShadow: '1px 1px 5px rgb(0, 0, 0, 0.3)',
          }}
        >
          Meet Our Engineering Team
        </Typography>
        <Box
          id='members'
          justifyContent='center'
          alignContent='center'
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            mb: 10,
            zIndex: '130',
          }}
        >
          <Box textAlign='center'>
            <Box
              component='img'
              src={brecht}
              style={{ width: '150px', height: '150px', zIndex: '1300' }}
            ></Box>
            <Typography
              variant='h5'
              color='whitesmoke'
              mb='5px'
              // textShadow='1px 1px 5px rgb(0, 0, 0, 0.3)'
            >
              Brecht Horn
            </Typography>
            <Typography
              variant='h6'
              fontWeight='lighter'
              color='whitesmoke'
              mb='15px'
              // textShadow='1px 1px 5px rgb(0, 0, 0, 0.3)'
            >
              Software Engineer
            </Typography>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                zIndex: '130',
              }}
            >
              <Box
                id='link'
                component='img'
                onClick={() => {
                  window.open(
                    'https://www.linkedin.com/in/brecht-horn-a9b839213/'
                  );
                }}
                style={styles.icons}
                src={linkedInPng}
                sx={{ ':hover': { width: '10px' } }}
              ></Box>
              <Box
                id='link'
                component='img'
                onClick={() => {
                  window.open('https://www.github.com/brecht-horn');
                }}
                style={styles.icons}
                src={githubPng}
              ></Box>
            </Box>
          </Box>
          <Box textAlign='center'>
            <Box
              component='img'
              src={john}
              style={{ width: '150px', height: '150px', zIndex: '130' }}
            ></Box>
            <Typography
              variant='h5'
              color='whitesmoke'
              mb='15px'
              // textShadow='1px 1px 5px rgb(0, 0, 0, 0.3)'
            >
              Hwi Won (John) Choi
            </Typography>
            <Typography
              variant='h6'
              fontWeight='lighter'
              color='whitesmoke'
              mb='15px'
              // textShadow='1px 1px 5px rgb(0, 0, 0, 0.3)'
            >
              Software Engineer
            </Typography>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <Box
                id='link'
                component='img'
                onClick={() => {
                  window.open(
                    'https://www.linkedin.com/in/hwi-won-choi-057081191/'
                  );
                }}
                style={styles.icons}
                src={linkedInPng}
              ></Box>
              <Box
                id='link'
                component='img'
                onClick={() => {
                  window.open('https://www.github.com/jhwiwoc');
                }}
                style={styles.icons}
                src={githubPng}
              ></Box>
            </Box>
          </Box>
          <Box textAlign='center'>
            <Box
              component='img'
              src={natalie}
              style={{ width: '150px', height: '150px' }}
            ></Box>
            <Typography
              variant='h5'
              color='whitesmoke'
              mb='15px'
              // textShadow='1px 1px 5px rgb(0, 0, 0, 0.3)'
            >
              Natalie Cordoves
            </Typography>
            <Typography
              variant='h6'
              fontWeight='lighter'
              color='whitesmoke'
              mb='15px'
              // textShadow='1px 1px 5px rgb(0, 0, 0, 0.3)'
            >
              Software Engineer
            </Typography>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <Box
                id='link'
                component='img'
                onClick={() => {
                  window.open('https://www.linkedin.com/in/natalie-cordoves');
                }}
                style={styles.icons}
                src={linkedInPng}
              ></Box>
              <Box
                id='link'
                component='img'
                onClick={() => {
                  window.open('https://www.github.com/ncordoves');
                }}
                style={styles.icons}
                src={githubPng}
              ></Box>
            </Box>
          </Box>
          <Box textAlign='center'>
            <Box
              component='img'
              src={olivia}
              style={{ width: '150px', height: '150px' }}
            ></Box>
            <Typography
              variant='h5'
              color='whitesmoke'
              mb='15px'
              // textShadow='1px 1px 5px rgb(0, 0, 0, 0.3)'
            >
              Olivia Hodel
            </Typography>
            <Typography
              variant='h6'
              fontWeight='lighter'
              color='whitesmoke'
              mb='15px'
              // textShadow='1px 1px 5px rgb(0, 0, 0, 0.3)'
            >
              Software Engineer
            </Typography>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <Box
                id='link'
                component='img'
                onClick={() => {
                  window.open('https://www.linkedin.com/in/olivia-hodel/');
                }}
                style={styles.icons}
                src={linkedInPng}
              ></Box>
              <Box
                id='link'
                component='img'
                onClick={() => {
                  window.open('https://www.github.com/ohodel');
                }}
                style={styles.icons}
                src={githubPng}
              ></Box>
            </Box>
          </Box>
          <Box textAlign='center'>
            <Box
              component='img'
              src={yining}
              style={{ width: '150px', height: '150px' }}
            ></Box>
            <Typography
              variant='h5'
              color='whitesmoke'
              mb='15px'
              // textShadow='1px 1px 5px rgb(0, 0, 0, 0.3)'
            >
              Yining Wang
            </Typography>
            <Typography
              variant='h6'
              fontWeight='lighter'
              color='whitesmoke'
              mb='15px'
              // textShadow='1px 1px 5px rgb(0, 0, 0, 0.3)'
            >
              Software Engineer
            </Typography>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <Box
                id='link'
                component='img'
                onClick={() => {
                  window.open(
                    'https://www.linkedin.com/in/yining-wang-83b896108/'
                  );
                }}
                style={styles.icons}
                src={linkedInPng}
              ></Box>
              <Box
                id='link'
                component='img'
                onClick={() => {
                  window.open('https://www.github.com/yiningcw');
                }}
                style={styles.icons}
                src={githubPng}
              ></Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </div>
  );
};

export default Team;
