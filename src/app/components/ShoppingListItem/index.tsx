import './index.css';
import {
  Checkbox,
  FormControlLabel,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateShoppingListItem } from '../../reducers/shoppingListReducer';

type ShoppingListItemType = {
  id: number;
  title: string;
  checked: boolean;
};

type Props = {
  item: ShoppingListItemType;
};

export default (props: Props): JSX.Element => {
  const dispatch = useDispatch();

  const handleChange = (
    _: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    dispatch(
      updateShoppingListItem({
        ...props.item,
        checked,
      })
    );
  };

  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox
          onChange={handleChange}
          edge="start"
          checked={props.item.checked}
        />
      </ListItemIcon>
      <ListItemText className={props.item.checked ? 'crossed-off' : ''}>
        {props.item.title}
      </ListItemText>
    </ListItem>
  );
};

export type { ShoppingListItemType };
