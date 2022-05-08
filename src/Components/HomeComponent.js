import React from 'react';
import { Avatar, Box, Button, Grid, InputAdornment, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import ContentCopyTwoToneIcon from '@mui/icons-material/ContentCopyTwoTone';
import { useNavigate } from 'react-router-dom';

export const HomeComponent = () => {

  const navigate = useNavigate();

  //to start game
  const letsPlay = () => {
    navigate('/new-game');
  }
  return (
    <Box
      component='form'
      noValidate
      autoComplete='off'
      alignContent='center'
    >
      <Stack spacing={2}>
        <Typography variant='h2' gutterBottom style={{ color: '#245B67', fontWeight: '900' }}>
          Do you have intuition? 
        </Typography>
        <TextField
          required
          fullWidth
          id='outlined-required'
          label='Player Name'
          defaultValue='Player1'
        />
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Avatar sx={{ width: 150, height: 150 }}></Avatar>
          </Grid>
          <Grid item xs={2}>
            <Avatar sx={{ width: 150, height: 150 }}></Avatar>
          </Grid>
          <Grid item xs={8} />
          <Grid item xs={2}>
            <Typography variant='h4' textAlign='center'>Player</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant='h4' textAlign='center'>Player</Typography>
          </Grid>
          <Grid item xs={8} />
        </Grid>
        <OutlinedInput
          id="outlined-adornment-weight"
          // value={values.weight}
          defaultValue='supply with link after setup with socket.io'
          endAdornment={<InputAdornment position="end"><ContentCopyTwoToneIcon /></InputAdornment>}
        />
        <Button
          fullwidth='true'
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
          onClick={letsPlay}
        >
          Let's Play!
        </Button>
      </Stack>
    </Box>
  );
}