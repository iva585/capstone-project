import Add from '@mui/icons-material/Add';
import {
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addShoppingListItem } from '../../reducers/shoppingListReducer';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

type IngredientItemType = {
  id: number;
  amount: string;
  title: string;
};

type Props = {
  item: IngredientItemType;
};

export default (props: Props): JSX.Element => {
  const dispatch = useDispatch();
  const handleAddToShoppingList = () => {
    dispatch(addShoppingListItem(props.item.title));
    alert('Added to Shopping List!');
  };
  return (
    <ListItem>
      <Typography>{props.item.amount}</Typography>
      <Divider sx={{ height: 28, m: 1 }} orientation="vertical" />
      <ListItemText>{props.item.title}</ListItemText>

      <IconButton
        onClick={handleAddToShoppingList}
        edge="end"
        aria-label="add to shopping list"
      >
        <AddShoppingCartOutlinedIcon />
      </IconButton>
    </ListItem>
  );
};
