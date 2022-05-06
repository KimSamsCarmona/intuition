import * as React from 'react';
import { Box, Card, Button, Typography, styled } from '@mui/material';

import { emojis } from '../shared/emojis';

export const GameComponent = () => {
  //randomly pick emoji
  const emoji1 = emojis[Math.floor(Math.random()*emojis.length)];
  const emoji2 = emojis[Math.floor(Math.random()*emojis.length)];
  const emoji3 = emojis[Math.floor(Math.random()*emojis.length)];

  //show selected
  const EmojiButton = styled(Button) ({
    '&:hover': {
      backgroundColor:'#9bd8e6'
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(155, 216, 230, .5)', 
      backgroundColor: '#2596BE'
    },
  });

  return (
    <div>
      <Typography variant='h2' gutterBottom style={{ color: '#245B67', fontWeight: '900' }}>
      Pick one
    </Typography>
    <Card
      style={{ width: '90%' }}
      sx={{
        display: 'grid',
        gridTemplateRows: 'repeat(3, 1fr)',
        alignContent: 'center',
        p: 4,
        mx: 'auto',
        bgcolor: '#9BD8E659',
        borderRadius: 1,
      }}>
      <EmojiButton variant='contained' sx={{ p:2, m:2, bgcolor:'#FFFFFFFF', fontSize: 50 }}>{emoji1}</EmojiButton>
      <EmojiButton variant='contained' sx={{ p:2, m:2, bgcolor:'#FFFFFFFF', fontSize: 50 }}>{emoji2}</EmojiButton>
      <EmojiButton variant='contained' sx={{ p:2, m:2, bgcolor:'#FFFFFFFF', fontSize: 50 }}>{emoji3}</EmojiButton>
    </Card>
    {/* <Box
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
          width:'100%', 
          height:'63px', 
          backgroundColor:'#2596BE', 
          color:'black', 
          fontSize:'2rem', 
          fontWeight:'bolder' 
          }}
        >
          Submit
      </Button>
    </Box> */}
  </div>
  );
}