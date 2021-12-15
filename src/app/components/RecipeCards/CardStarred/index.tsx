import { Card, CardContent, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export type StepItemType = {
  id: number;
  title: string;
  description: string;
};

type Props = {
  item: StepItemType;
};

export default (props: Props): JSX.Element => {
  return (
    <Card
      sx={{
        display: 'flex',
        width: '90%',
        height: '11rem',
        ml: '16px',
      }}
    >
      <Box sx={{ overflow: 'hidden', alignSelf: 'center' }}>
        <img
          src="https://images.unsplash.com/photo-1616299908398-9af1134ad522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=737&q=80"
          alt="pesto pasta"
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {props.item.title}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
          >
            {props.item.description}
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
