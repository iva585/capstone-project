import { Box } from '@mui/system';
import React from 'react';
import './index.css';

export default (): JSX.Element => {
  return (
    <Box sx={{ width: '100%', height: '200px', overflow: 'hidden' }}>
      <img
        className="image-header"
        src="https://images.unsplash.com/photo-1616299908398-9af1134ad522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=737&q=80"
      />
    </Box>
  );
};
