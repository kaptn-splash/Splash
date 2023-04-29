import React from 'react'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import face from '../smileface.png'
import linkedInPng from '../linkedin.png'
import githubPng from '../gh.png'
import natalie from '../natalie.jpeg'


const styles = {
  icons: {
    width: '60px',
    height: '60px',
  }
}

const Team = () => {
  return (
    <Grid id = 'TeamBio' justifyContent='center' alignItems = 'center'>
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
                    mb: 5
                }}>Meet Our Engineering Team</Typography>
      <Box id = 'members' justifyContent='center' alignContent='center' sx={{display: 'flex', flexDirection: 'row', justifyContent:'space-around', alignItems: 'center', mb: 10}}>
        <Box textAlign='center'>
          <Box component='img' src={face} style = {{width: '150px', height: '150px'}}></Box>
          <Typography variant='h5' color='whitesmoke' mb='15px'>Brecht Horn</Typography>
          <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <Box id='link' component='img' onClick={() => {window.open('https://www.linkedin.com/in/brecht-horn-a9b839213/')}} style={styles.icons} src = {linkedInPng} sx={{':hover': {width: '10px'}}}></Box>
            <Box id='link' component='img' onClick={() => {window.open('https://www.github.com/brechtsky')}} style={styles.icons} src = {githubPng}></Box>
          </Box>
        </Box>
        <Box textAlign='center'>
          <Box component='img' src={face} style = {{width: '150px', height: '150px'}}></Box>
          <Typography variant='h5' color='whitesmoke' mb='15px'>Hwi Won (John) Choi</Typography>
          <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <Box id='link' component='img' onClick={() => {window.open('https://www.linkedin.com/in/hwi-won-choi-057081191/')}} style={styles.icons} src = {linkedInPng}></Box>
            <Box id='link' component='img' onClick={() => {window.open('https://www.github.com/jhwiwoc')}} style={styles.icons} src = {githubPng}></Box>
          </Box>
        </Box>
        <Box textAlign='center'>
          <Box component='img' src={natalie} style = {{width: '150px', height: '150px'}}></Box>
          <Typography variant='h5' color='whitesmoke' mb='15px'>Natalie Cordoves</Typography>
          <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <Box id='link' component='img' onClick={() => {window.open('https://www.linkedin.com/in/natalie-cordoves')}} style={styles.icons} src = {linkedInPng}></Box>
            <Box id='link' component='img' onClick={() => {window.open('https://www.github.com/ncordoves')}} style={styles.icons} src = {githubPng}></Box>
          </Box>
        </Box>
        <Box textAlign='center'>
          <Box component='img' src={face} style = {{width: '150px', height: '150px'}}></Box>
          <Typography variant='h5' color='whitesmoke' mb='15px'>Olivia Hodel</Typography>
          <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <Box id='link' component='img' onClick={() => {window.open('https://www.linkedin.com/in/olivia-hodel/')}} style={styles.icons} src = {linkedInPng}></Box>
            <Box id='link' component='img' onClick={() => {window.open('https://www.github.com/ohodel')}} style={styles.icons} src = {githubPng}></Box>
          </Box>
        </Box>
        <Box textAlign='center'>
          <Box component='img' src={face} style = {{width: '150px', height: '150px'}}></Box>
          <Typography variant='h5' color='whitesmoke' mb='15px'>Yining Wang</Typography>
          <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <Box id='link' component='img' onClick={() => {window.open('https://www.linkedin.com/in/yining-wang-83b896108/')}} style={styles.icons} src = {linkedInPng}></Box>
            <Box id='link' component='img' onClick={() => {window.open('https://www.github.com/yiningcw')}} style={styles.icons} src = {githubPng}></Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  )
}

export default Team