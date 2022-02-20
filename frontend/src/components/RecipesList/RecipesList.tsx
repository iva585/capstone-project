import { List, Typography } from '@mui/material';
import React from 'react';
import type { Recipe } from '../../pages/RecipeDetail/RecipeDetail';
import CardDefault from '../RecipeCards/CardDefault';

type Props = {
  recipes: Recipe[];
};

export default (props: Props): JSX.Element => {
  return (
    <List sx={{ display: 'flex', flexDirection: 'column', p: '7px' }}>
      <Typography
        variant="h6"
        sx={{
          alignSelf: 'start',
          pl: '16px',
          textTransform: 'uppercase',
        }}
      >
        All Recipes
      </Typography>
      {props.recipes.map((item) => (
        <CardDefault key={item.id} item={item} />
      ))}
    </List>
  );
};
