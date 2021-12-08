import Add from '@mui/icons-material/Add';
import {
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

type IngredientItemType = {
  id: number;
  amount: string;
  title: string;
};

type Props = {
  item: IngredientItemType;
};

export default (props: Props): JSX.Element => {
  return (
    <ListItem>
      <Typography>{props.item.amount}</Typography>
      <Divider sx={{ height: 28, m: 1 }} orientation="vertical" />
      <ListItemText>{props.item.title}</ListItemText>

      <IconButton edge="end" aria-label="add to shopping list">
        <Add />
      </IconButton>
    </ListItem>
  );
};
