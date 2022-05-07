import React from 'react';
import { Avatar, Box, Button, Card, Grid, Typography } from '@mui/material';

export const ResultsComponent = (props) => {
  const winEmoji = props.winEmoji

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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4
        }}>
        <Button
          fullwidth
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
        >
          Play Again
        </Button>
      </Box>
    </div>
  );
}