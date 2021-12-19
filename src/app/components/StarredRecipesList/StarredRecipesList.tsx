import { List, Typography } from '@mui/material';
import React from 'react';
import type { Recipe } from '../../pages/RecipeDetail/RecipeDetail';
import CardStarred from '../RecipeCards/CardStarred';

type Props = {
  recipes: Recipe[];
};

export default (props: Props): JSX.Element => {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          alignSelf: 'start',
          pt: '70px',
          pl: '22px',
          textTransform: 'uppercase',
        }}
      >
        Starred Recipes
      </Typography>
      <List sx={{ display: 'flex', p: '16px', overflow: 'scroll' }}>
        {props.recipes
          .filter((recipe) => recipe.starred)
          .map((item) => (
            <CardStarred key={item.id} item={item} />
          ))}
      </List>
    </>
  );
};
