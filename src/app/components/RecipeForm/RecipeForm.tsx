import {
  Box,
  Card,
  CardContent,
  IconButton,
  ImageListItemBar,
  Input,
} from '@mui/material';
import React from 'react';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

export default (): JSX.Element => {
  return (
    //@TODO: Replace placeholder with file upload
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
        <ImageListItemBar
          sx={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
              'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
          }}
          position="top"
          actionIcon={
            <IconButton sx={{ color: 'white' }}>
              <StarBorderRoundedIcon />
            </IconButton>
          }
          actionPosition="right"
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
          <Input
            placeholder="Add Recipe Title Here"
            inputProps={{ 'aria-label': 'add recipe title', maxLength: 30 }}
          />

          <Input
            placeholder="Add Description Here"
            inputProps={{
              'aria-label': 'add short description',
              maxLength: 60,
            }}
          />
        </CardContent>
      </Card>
    </Box>
  );
};
