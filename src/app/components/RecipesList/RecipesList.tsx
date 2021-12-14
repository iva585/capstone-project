import { List, ListItem, Typography } from '@mui/material';
import React from 'react';
import CardDefault from '../RecipeCards/CardDefault';

const initialState = [
  {
    id: 1,
    title: 'Tasty Pasta',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ducimus reiciendis unde.',
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
      {initialState.map((item) => (
        <CardDefault key={item.id} item={item} />
      ))}
    </List>
  );
};
