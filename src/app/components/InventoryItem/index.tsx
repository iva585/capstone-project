import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteInventoryItem,
  updateInventoryItem,
} from '../../reducers/inventoryReducer';
import './index.css';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import Add from '@mui/icons-material/Add';

type InventoryItemType = {
  id: number;
  title: string;
  checked: boolean;
};

type Props = {
  item: InventoryItemType;
};

export default (props: Props): JSX.Element => {
  const dispatch = useDispatch();

  const [editing, setEditing] = useState<boolean>(false);

  const handleClick = () => {
    setEditing((current) => !current);
  };

  const handleCheck = (
    _: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    dispatch(
      updateInventoryItem({
        ...props.item,
        checked,
      })
    );
  };

  const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const title = event.target.value;
    dispatch(
      updateInventoryItem({
        ...props.item,
        title,
      })
    );
  };

  const handleDelete = () => {
    dispatch(
      deleteInventoryItem({
        ...props.item,
      })
    );
  };

  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={props.item.checked}
          onChange={handleCheck}
        />
      </ListItemIcon>
      <ListItemText
        sx={{ wordWrap: 'break-word' }}
        className={props.item.checked ? 'crossed-off' : ''}
      >
        {editing ? (
          <>
            <TextField
              id="standard-basic"
              variant="standard"
              value={props.item.title}
              onChange={handleUpdate}
              inputProps={{ maxLength: 50 }}
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
        {props.item.checked ? (
          <IconButton>
            <Add />
          </IconButton>
        ) : (
          ''
        )}
      </ListItemText>
    </ListItem>
  );
};

export type { InventoryItemType };
