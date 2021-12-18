import { List, Typography } from '@mui/material';
import React from 'react';
import CardStarred from '../RecipeCards/CardStarred';

const initialState = [
  {
    id: 1,
    title: 'Pesto Pasta',
    description: 'Best served with a glass of Sauvignon Blanc!',
  },
  {
    id: 2,
    title: 'Very Tasty Pasta',
    description:
      'Reprehenderit praesentium ipsa alias, sint, iure odit illo voluptate, quia cum distinctio qui adipisci',
  },
  {
    id: 3,
    title: 'Pesto Pasta',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ut, nulla consectetur incidunt molestiae libero recusandae explicabo.',
  },
  {
    id: 4,
    title: 'Basil Pasta',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ut, nulla consectetur incidunt molestiae libero recusandae explicabo.',
  },
];

export default (): JSX.Element => {
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
        {initialState.map((item) => (
          <CardStarred key={item.id} item={item} />
        ))}
      </List>
    </>
  );
};
