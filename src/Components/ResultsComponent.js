import React from 'react';
import { Avatar, Box, Button, Card, Grid, Typography, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const ResultsComponent = ({winEmoji}) => {
  
  const navigate = useNavigate();

  //to play again with same player
  const playAgain = () => {
    navigate ('/new-game');
  }

  //to quit game with current player
  const quitGame = () => {
    navigate ('/');
  }

  // const playerOne = '';
  // const playerTwo = '';

  // //results text for pending, match, no match
  // const resultsText =  () => {
  //   if (playerOne === playerTwo) {
  //     return (
  //       <Typography variant='h2' gutterBottom style={{ color: '#245B67', fontWeight: '900' }}>
  //       You Matched!
  //     </Typography>
  //     )
  //   } 
  //   if (playerTwo && playerOne !== playerTwo) {
  //     return (
  //       <Typography variant='h2' gutterBottom style={{ color: '#245B67', fontWeight: '900' }}>
  //       You Didn't Match. Try again!
  //     </Typography>
  //     )
  //   } else {
  //     return (
  //       <Typography variant='h2' gutterBottom style={{ color: '#245B67', fontWeight: '900' }}>
  //       Waiting for other player...
  //     </Typography>
  //     )
  //   }
  // }
  return (
    <div>
      <Typography variant='h2' gutterBottom style={{ color: '#245B67', fontWeight: '900' }}>
        You Matched!
      </Typography>
      <Card
        style={{ width: '90%' }}
        sx={{
          display: 'grid',
          alignContent: 'center',
          p: 4,
          mx: 'auto',
          bgcolor: '#9BD8E659',
          borderRadius: 1,
        }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h4'>Player 1</Typography>
          </Grid>
          <Grid item xs={4}>
            <Avatar sx={{ width: 60, height: 60 }}>KS</Avatar>
          </Grid>
          <Grid item xs={8}>
            <Card
              style={{ width: '80%' }}
              sx={{
                display: 'grid',
                alignContent: 'center',
                textAlign: 'center',
                p: 4,
                mx: 'auto',
                bgcolor: '#FFFFFFFF',
                borderRadius: 1,
                fontSize: 50
              }}>
              {winEmoji}
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h4'>Player 2</Typography>
          </Grid>
          <Grid item xs={4}>
            <Avatar sx={{ width: 60, height: 60 }}>FC</Avatar>
          </Grid>
          <Grid item xs={8}>
            <Card
              style={{ width: '80%' }}
              sx={{
                display: 'grid',
                alignContent: 'center',
                textAlign: 'center',
                p: 4,
                mx: 'auto',
                bgcolor: '#FFFFFFFF',
                borderRadius: 1,
                fontSize: 50
              }}>
              Results Window
            </Card>
          </Grid>
        </Grid>
      </Card>
      <Box
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          p: 4
        }}>
          <Stack spacing={2}>
              <Button
              fullwidth ='true'
              size='large'
              variant='contained'
              style={{
                width: '100%',
                height: '63px',
                backgroundColor: '#2596BE',
                color: 'black',
                fontSize: '2rem',
                fontWeight: 'bolder'
              }}
              onClick={playAgain}
            >
              Play Again
          </Button>
          <Button
              fullwidth ='true'
              size='large'
              variant='contained'
              style={{
                width: '100%',
                height: '63px',
                backgroundColor: '#9BD8E659',
                color: 'black',
                fontSize: '2rem',
                fontWeight: 'bolder'
              }}
              onClick={quitGame}
            >
              Quit
          </Button>
        </Stack>
      </Box>
    </div>
  );
}