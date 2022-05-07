import React, { useState, useEffect } from 'react';
import { Card, Button, Typography, styled } from '@mui/material';

import { emojis } from '../shared/emojis';

//randomly pick emoji
const emoji1 = emojis[Math.floor(Math.random() * emojis.length)];
const emoji2 = emojis[Math.floor(Math.random() * emojis.length)];
const emoji3 = emojis[Math.floor(Math.random() * emojis.length)];

//emoji onClick functions
const emojiClick1=() => {
  alert(emoji1);
}

const emojiClick2=() => {
  alert(emoji2);
}

const emojiClick3=() => {
  alert(emoji3)
}

// export const WinEmoji = async () => {
//   if (emojiClick1) {
//     return {emoji1}
//   } 
//   if (emojiClick2) {
//     return {emoji2}
//   }
//   if (emojiClick3) {
//     return {emoji3}
//   } else {
//     alert('Pick an emoji')
//   }
// }

export const GameComponent = () => {
  //show selected
  const EmojiButton = styled(Button)({
    '&:hover': {
      backgroundColor: '#9bd8e6'
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
        <EmojiButton variant='contained' sx={{ p: 2, m: 2, bgcolor: '#FFFFFFFF', fontSize: 50 }} onClick={emojiClick1}>{emoji1}</EmojiButton>
        <EmojiButton variant='contained' sx={{ p: 2, m: 2, bgcolor: '#FFFFFFFF', fontSize: 50 }} onClick={emojiClick2}>{emoji2}</EmojiButton>
        <EmojiButton variant='contained' sx={{ p: 2, m: 2, bgcolor: '#FFFFFFFF', fontSize: 50 }} onClick={emojiClick3}>{emoji3}</EmojiButton>
      </Card>
    </div>
  );
}