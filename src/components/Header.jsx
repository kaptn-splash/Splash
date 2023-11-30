import React from 'react';
import { Grid, Typography } from '@mui/material';
import logo from '../images/kaptn_Logo_2.png';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <Grid id='header'>
      <Box
        // disableEqualOverflow='true'
        style={{
          // backgroundColor: '#120838',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignContent: 'center',
          width: '100%',
          height: '100%',
          mt: 50,
        }}
      >
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignContent: 'center',
            width: '65%',
          }}
        >
          <Box
            id='logo'
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              src={logo}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                height: '350px',
                width: '350px',
                zIndex: '130',
              }}
              component='img'
            ></Box>
          </Box>
          <Box
            id='download'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Typography
                variant='h2'
                style={{ textShadow: '2px 2px 10px rgb(0, 0, 0, 0.5)' }}
                sx={{
                  fontFamily: 'Outfit',
                  fontSize: 85,
                  fontWeight: 'normal',
                  letterSpacing: '0px',
                  color: '#f5f5f5',
                  textDecoration: 'none',
                  mb: 3,
                  zIndex: '130',
                }}
              >
                kaptn
              </Typography>
              <div
                style={{
                  fontFamily: 'Outfit',
                  fontSize: "70px",
                  fontWeight: 'normal',
                  letterSpacing: '0px',
                  color: 'magenta',
                  textDecoration: 'none',
                  padding:"12px 0 0 0",
                  margin: "0 0 0px 20px",
                  zIndex: '130',
                  textShadow: '2px 2px 10px rgb(0, 0, 0, 0.5)'
                }}
              >
                v2.0.1
              </div>
            </div>

            <Typography
              variant='h4'
              align='center'
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 50,
                fontSize: '1.8rem',
                letterSpacing: '.1 rem',
                color: '#f5f5f5',
                textDecoration: 'none',
                mt: 1,
                mb: 2,
                zIndex: '130',
                textShadow: '1px 1px 5px rgb(0, 0, 0, 0.3)',
              }}
            >
              Unlock the full power of the kubernetes command kubectl, while
              easily initializing and monitoring kubernetes clusters
            </Typography>
            <Typography
              variant='h4'
              align='center'
              sx={{
                fontFamily: 'Outfit',
                fontSize: '24px',
                letterSpacing: '.1 rem',
                color: '#f965f1',
                textDecoration: 'none',
                mt: 1,
                mb: 1,
                zIndex: '130',
                textShadow: '1px 1px 5px rgb(0, 0, 0, 0.3)',
              }}
            >
              Download Now
            </Typography>
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Header;
