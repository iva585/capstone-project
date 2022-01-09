import { List, Typography } from '@mui/material';
import React from 'react';
import type { Recipe } from '../../pages/RecipeDetail/RecipeDetail';
import CardStarred from '../RecipeCards/CardStarred';

type Props = { title: string; recipes: Recipe[] };

export default (props: Props): JSX.Element => (
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
      {props.title}
    </Typography>
    <List sx={{ display: 'flex', p: '16px', overflow: 'scroll' }}>
      <CardStarred />
    </List>
  </>
);
