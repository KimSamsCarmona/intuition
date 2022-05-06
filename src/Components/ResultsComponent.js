import * as React from 'react';
import { Avatar, Button, Card, Grid, Typography } from '@mui/material';

export const ResultsComponent = () => {

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
            <Typography> Results Window</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h4'>Player 2</Typography>
          </Grid>
          <Grid item xs={4}>
            <Avatar sx={{ width: 60, height: 60 }}>FC</Avatar>
          </Grid>
          <Grid item xs={8}>
            <Typography> Results Window</Typography>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}