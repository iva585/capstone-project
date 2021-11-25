import './index.css';
import { Checkbox, FormControlLabel, ListItem } from '@mui/material';
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
      <FormControlLabel
        className={props.item.checked ? 'crossed-off' : ''}
        label={props.item.title}
        control={
          <Checkbox
            onChange={handleChange}
            edge="start"
            checked={props.item.checked}
          />
        }
      />
    </ListItem>
  );
};

export type { ShoppingListItemType };
