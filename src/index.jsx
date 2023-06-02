import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Grid from '@mui/system/Unstable_Grid/Grid';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Grid
    // backgroundColor='#120838'
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignContent: 'center',
    }}
  >
    <React.StrictMode>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Outfit:wght@600;700;800&family=Red+Hat+Display:wght@600;700&family=Righteous&family=Roboto:wght@300;400;500;700&family=Oswald:wght@200;300;400;500;600;700&display=swap'
      />
      <App />
    </React.StrictMode>
  </Grid>
);
