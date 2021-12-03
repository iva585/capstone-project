import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

type InventoryItemType = {
  id: number;
  title: string;
  checked: boolean;
};

type Props = {
  item: InventoryItemType;
};

export default (props: Props): JSX.Element => {
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox edge="start" checked={props.item.checked} />
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
