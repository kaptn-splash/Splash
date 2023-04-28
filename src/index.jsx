import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Grid from '@mui/system/Unstable_Grid/Grid';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Grid backgroundColor='#120838' sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignContent: 'center', mb: 40}}>

  <React.StrictMode>
    <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
    <App />
  </React.StrictMode>
  </Grid>
);
