import { Checkbox, ListItem } from '@mui/material';
import React from 'react';

type ShoppingListItemType = {
  title: string;
};

type Props = {
  item: ShoppingListItemType;
};

export default (props: Props): JSX.Element => (
  <ListItem>
    {' '}
    <Checkbox edge="start" />
    {props.item.title}
  </ListItem>
);

export type { ShoppingListItemType };
