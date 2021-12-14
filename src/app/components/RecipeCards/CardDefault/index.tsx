import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  ListItem,
  Typography,
} from '@mui/material';
import React from 'react';

export default (): JSX.Element => {
  return (
    <ListItem>
      <Card>
        <Box
          sx={{
            height: '200px',
            overflow: 'hidden',
          }}
        >
          <img
            className="image-header"
            src="https://images.unsplash.com/photo-1616299908398-9af1134ad522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=737&q=80"
            alt="pesto pasta"
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Something tasty
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ab
            voluptates cumque delectus rerum quam unde fugiat facere corrupti
            dolor magni.
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" color="primary">
            View full recipe
          </Button>
        </CardActions>
      </Card>
    </ListItem>
  );
};
