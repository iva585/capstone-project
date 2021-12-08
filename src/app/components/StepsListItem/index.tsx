import { ListItem, Typography } from '@mui/material';
import React from 'react';

export default (): JSX.Element => {
  return (
    <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h6">STEP 1</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iusto
        architecto temporibus cupiditate incidunt voluptatum non voluptatibus
        inventore vel corrupti enim neque at deserunt magnam itaque provident,
        necessitatibus qui fugit!
      </Typography>
    </ListItem>
  );
};
