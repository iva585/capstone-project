import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateInventoryItem } from '../../reducers/inventoryReducer';
import './index.css';

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
        {props.item.title}
      </ListItemText>
    </ListItem>
  );
};

export type { InventoryItemType };
