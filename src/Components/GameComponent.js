import * as React from 'react';
import { Box, Card, CardContent, CardActions, Button, Typography } from '@mui/material';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}


export const GameComponent = () => {
  return (
    <Box>
      <h2 style={{ color: '#245B67',  }}>Pick One</h2>
      <Card
        style={{ width: '60%' }}
        sx={{
          display: 'grid',
          gridTemplateRows: 'repeat(3, 1fr)',
          alignContent: 'center',
          p: 4,
          mx: 'auto',
          bgcolor: '#9BD8E659',
          borderRadius: 1,
        }}>
        <Button sx={{ bgcolor: '#FFFFFFBF', p:2, m:2 }}>Item 1</Button>
        <Button sx={{ bgcolor: '#FFFFFFBF', p:2, m:2 }}>Item 2</Button>
        <Button sx={{ bgcolor: '#FFFFFFBF', p:2, m:2 }}>Item 3</Button>
      </Card>
  </Box>
  );
}