import { Card, CardContent, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default (): JSX.Element => {
  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ width: 151, height: 151, overflow: 'hidden' }}>
        <img
          className="image-header"
          src="https://images.unsplash.com/photo-1616299908398-9af1134ad522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=737&q=80"
          alt="pesto pasta"
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Pesto Pasta
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            recusandae culpa delectus officia impedit magnam.
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="see more">
            <ArrowForwardIosIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};
