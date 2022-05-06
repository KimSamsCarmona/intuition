import * as React from 'react';
import { Box, Card, CardContent, CardActions, Button, Typography } from '@mui/material';

export const GameComponent = () => {
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
      <Button variant='contained' sx={{ p:2, m:2, bgcolor:'#FFFFFFBF'}}>Item 1</Button>
      <Button variant='contained' sx={{ p:2, m:2, bgcolor:'#FFFFFFBF'}}>Item 1</Button>
      <Button variant='contained' sx={{ p:2, m:2, bgcolor:'#FFFFFFBF'}}>Item 1</Button>
    </Card>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 4
      }}>
      <Button fullwidth size='large' variant='contained' style={{ width: '100%', height: '63px', backgroundColor: '#2596BE', color: 'black', fontSize: '2rem', fontWeight: 'bolder' }}>
          Submit
      </Button>
    </Box>
  </div>
  );
}