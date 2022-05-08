import React from 'react';
import { Avatar, Box, Button, Card, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const HomeComponent = () => {

  const navigate = useNavigate();

  //to play again with same player
  const letsPlay = () => {
    navigate ('/new-game');
  }
  return (
    <Button
            fullwidth = 'true'
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
  );
}