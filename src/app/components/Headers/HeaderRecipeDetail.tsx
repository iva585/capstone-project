import { Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './index.css';

export default (): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ width: '100%', height: '200px', overflow: 'hidden' }}>
        <img
          className="image-header"
          src="https://images.unsplash.com/photo-1616299908398-9af1134ad522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=737&q=80"
          alt="pesto pasta"
        />
      </Box>
      <Card
        sx={{
          mt: -7,
          alignSelf: 'center',
          width: '70%',
          p: 0,
          borderRadius: '20px',
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography gutterBottom variant="h5">
            Pesto Pasta
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: 'center' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit!
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
