import React, { useState } from 'react';
import '@fontsource/roboto';
import { Box, Typography } from '@mui/material'
import { Routes, Route } from 'react-router-dom';

import { GameComponent } from './Components/GameComponent';
import { ResultsComponent } from './Components/ResultsComponent';

function App() {

  const [winEmoji, setEmoji] = useState(false)

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
      <Routes>
        <Route path='/' element={<GameComponent winEmoji={winEmoji} setEmoji={setEmoji} />} />
        <Route path='/results' element={<ResultsComponent winEmoji={winEmoji} />} />
      </Routes>
    </Box>
  );
}

export default App;
