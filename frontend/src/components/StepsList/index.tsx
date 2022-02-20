import { List } from '@mui/material';
import React from 'react';
import StepsListItem from '../StepsListItem';
import type { RecipeStep } from '../StepsListItem';

type Props = {
  steps: RecipeStep[];
};

export default (props: Props): JSX.Element => {
  return (
    <List sx={{ mt: '10px' }}>
      {props.steps.map((item, index) => (
        <StepsListItem key={index} item={item} step={index + 1} />
      ))}
    </List>
  );
};
