import { ListItem, Typography } from '@mui/material';
import React from 'react';

export type RecipeStep = {
  description: string;
};

type Props = {
  item: RecipeStep;
  step: number;
};

export default (props: Props): JSX.Element => (
  <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
    <Typography
      variant="h6"
      sx={{ alignSelf: 'start', textTransform: 'uppercase' }}
    >
      step {props.step}
    </Typography>
    <Typography variant="body1" sx={{ fontWeight: 'light' }}>
      {props.item.description}
    </Typography>
  </ListItem>
);
