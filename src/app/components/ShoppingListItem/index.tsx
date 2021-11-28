import './index.css';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteShoppingListItem,
  updateShoppingListItem,
} from '../../reducers/shoppingListReducer';

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

  const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleDelete = () => {
    dispatch(
      deleteShoppingListItem({
        ...props.item,
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
          <>
            <TextField
              id="standard-basic"
              variant="standard"
              value={props.item.title}
              onChange={handleUpdate}
            />
            <IconButton onClick={handleClick} aria-label="done" color="primary">
              <DoneIcon />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteIcon color="primary" />
            </IconButton>
          </>
        ) : (
          <span onClick={handleClick}>
            {props.item.title === '' ? (
              <i className="placeholder">Click to add an item</i>
            ) : (
              props.item.title
            )}
          </span>
        )}
      </ListItemText>
    </ListItem>
  );
};

export type { ShoppingListItemType };
