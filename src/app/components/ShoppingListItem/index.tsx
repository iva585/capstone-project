import { Checkbox, FormControlLabel, ListItem } from '@mui/material';
import React from 'react';

type ShoppingListItemType = {
  id: number;
  title: string;
  checked: boolean;
};

type Props = {
  item: ShoppingListItemType;
};

export default (props: Props): JSX.Element => (
  <ListItem>
    <FormControlLabel
      label={props.item.title}
      control={<Checkbox edge="start" checked={props.item.checked} />}
    />
  </ListItem>
);

export type { ShoppingListItemType };