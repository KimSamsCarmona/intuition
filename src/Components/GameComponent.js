import React, { useEffect } from 'react';
import { Card, Button, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { emojis } from '../shared/emojis';


export const GameComponent = ({ winEmoji, setEmoji }) => {
  // const [winEmoji, setEmoji] = useState(false) -- LIFTED STATE TO APP.JS

  const navigate = useNavigate();

  //randomly pick emoji
  const emoji1 = emojis[Math.floor(Math.random() * emojis.length)];
  const emoji2 = emojis[Math.floor(Math.random() * emojis.length)];
  const emoji3 = emojis[Math.floor(Math.random() * emojis.length)];

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

  //emoji onClick functions, update winEmoji state
  const emojiClick1 = () => {
    setEmoji(emoji1);
    navigate('/results');
  }

  const emojiClick2 = () => {
    setEmoji(emoji2);
    navigate('/results');
  }

  const emojiClick3 = () => {
    setEmoji(emoji3);
    navigate('/results');
  }

  //log selected "winning" emoji to the consoloe
  useEffect(() => {
    console.log(winEmoji);
  })

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
