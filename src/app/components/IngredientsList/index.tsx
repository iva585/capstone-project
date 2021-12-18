import React from 'react';
import List from '@mui/material/List/List';
import IngredientListItem from '../IngredientListItem';
import type { RecipeIngredient } from '../IngredientListItem';
import { Typography } from '@mui/material';

type Props = {
  ingredients: RecipeIngredient[];
};

export default (props: Props) => {
  return (
    <>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          mt: '5px',
        }}
      >
        <Typography
          variant="h6"
          sx={{ alignSelf: 'start', pl: 1.5, textTransform: 'uppercase' }}
        >
          ingredients
        </Typography>
        {props.ingredients.map((item, index) => (
          <IngredientListItem key={index} item={item} />
        ))}
      </List>
    </>
  );
};
