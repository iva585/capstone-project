import { ListItem, Typography } from '@mui/material';
import React from 'react';

export type StepItemType = {
  id: number;
  step: number;
  description: string;
};

type Props = {
  item: StepItemType;
};

export default (props: Props): JSX.Element => {
  return (
    <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h6" sx={{ alignSelf: 'start' }}>
        STEP {props.item.step}
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 'light' }}>
        {props.item.description}
      </Typography>
    </ListItem>
  );
};
