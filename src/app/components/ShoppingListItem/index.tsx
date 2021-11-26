import './index.css';
import {
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
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

  const [editing, setEditing] = useState<boolean>(false);

  const handleClick = () => {
    setEditing((current) => !current);
  };

  const handleUpdate = (
    event: React.ChangeEvent<HTMLInputElement | HTMLInputElement>
  ) => {
    const title = event.target.value;
    dispatch(
      updateShoppingListItem({
        ...props.item,
        title,
      })
    );
  };

  const handleCheck = (
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
          onChange={handleCheck}
          edge="start"
          checked={props.item.checked}
        />
      </ListItemIcon>
      <ListItemText className={props.item.checked ? 'crossed-off' : ''}>
        {editing ? (
          <TextField
            id="standard-basic"
            variant="standard"
            value={props.item.title}
            onChange={handleUpdate}
          />
        ) : (
          // define input value
          // define WHEN the state is changed back to editable=false

          <span onClick={handleClick}>{props.item.title}</span>
        )}
      </ListItemText>
    </ListItem>
  );
};

export type { ShoppingListItemType };
