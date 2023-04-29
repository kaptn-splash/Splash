import React from 'react'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import face from '../smileface.png'
import linkedInPng from '../linkedin.png'
import githubPng from '../gh.png'



const styles = {
  icons: {
    width: '60px',
    height: '60px',
  }
}

const Team = () => {
  return (
    <Grid id = 'TeamBio' justifyContent='center' alignItems = 'center'>
      <Typography variant='h4' color='whitesmoke' textAlign='center'>Meet Our Engineering Team</Typography>
      <Box id = 'members' justifyContent='center' alignContent='center' sx={{display: 'flex', flexDirection: 'row', justifyContent:'space-around', alignItems: 'center'}}>
        <Box textAlign='center'>
          <Box component='img' src={face} style = {{width: '150px', height: '150px'}}></Box>
          <Typography variant='h5' color='whitesmoke'>Brecht Horn</Typography>
          {/* <IconButton component={Link} to="https://www.linkedin.com" style={brechtBox}></IconButton> */}
          <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <Box component='img' onClick={() => {window.open('https://www.linkedin.com')}} style={styles.icons} src = {linkedInPng} ></Box>
            <Box component='img' onClick={() => {window.open('https://www.github.com')}} style={styles.icons} src = {githubPng}></Box>
          </Box>
        </Box>
        <Box textAlign='center'>githubPng
          <Box component='img' src={face} style = {{width: '150px', height: '150px'}}></Box>
          <Typography variant='h5' color='whitesmoke'>Hwi Won (John) Choi</Typography>
          <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <Box component='img' onClick={() => {window.open('https://www.linkedin.com')}} style={styles.icons} src = {linkedInPng}></Box>
            <Box component='img' onClick={() => {window.open('https://www.github.com')}} style={styles.icons} src = {githubPng}></Box>
          </Box>
        </Box>
        <Box textAlign='center'>
          <Box component='img' src={face} style = {{width: '150px', height: '150px'}}></Box>
          <Typography variant='h5' color='whitesmoke'>Natalie Cordoves</Typography>
          <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <Box component='img' onClick={() => {window.open('https://www.linkedin.com')}} style={styles.icons} src = {linkedInPng}></Box>
            <Box component='img' onClick={() => {window.open('https://www.github.com')}} style={styles.icons} src = {githubPng}></Box>
          </Box>
        </Box>
        <Box textAlign='center'>
          <Box component='img' src={face} style = {{width: '150px', height: '150px'}}></Box>
          <Typography variant='h5' color='whitesmoke'>Olivia Hodel</Typography>
          <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <Box component='img' onClick={() => {window.open('https://www.linkedin.com')}} style={styles.icons} src = {linkedInPng}></Box>
            <Box component='img' onClick={() => {window.open('https://www.github.com')}} style={styles.icons} src = {githubPng}></Box>
          </Box>
        </Box>
        <Box textAlign='center'>
          <Box component='img' src={face} style = {{width: '150px', height: '150px'}}></Box>
          <Typography variant='h5' color='whitesmoke'>Yining Wang</Typography>
          <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <Box component='img' onClick={() => {window.open('https://www.linkedin.com')}} style={styles.icons} src = {linkedInPng}></Box>
            <Box component='img' onClick={() => {window.open('https://www.github.com')}} style={styles.icons} src = {githubPng}></Box>
          </Box>
        </Box>
      </Box>
    </Grid>
    
  )
}

export default Team