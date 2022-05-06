import React from 'react';
import '@fontsource/roboto';
import { Box, Typography } from '@mui/material'

import { GameComponent } from './Components/GameComponent';

function App() {
  return (
  <Box
    style={{ width: '80%' }}
    sx={{
      alignContent: 'center',
      mx: 'auto',
      borderRadius: 1,
    }}
  >
    <Typography variant='h4' componenet='h1' gutterBottom style={{ color: '#245B67' }}>
      intuition.io
    </Typography>
    <GameComponent />
  </Box>
  );
}

export default App;
