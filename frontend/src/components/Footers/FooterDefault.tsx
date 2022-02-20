import React from 'react';
import { Paper, BottomNavigation, Fab, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KitchenIcon from '@mui/icons-material/Kitchen';
import { useNavigate } from 'react-router';

type Props = {
  actionButtonIcon: JSX.Element;
  onClickActionButton: () => void;
};

export default (props: Props): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={4}
    >
      <BottomNavigation>
        <IconButton onClick={() => navigate('/inventory')} sx={{ mx: 5 }}>
          <KitchenIcon />
        </IconButton>
        <Fab
          onClick={props.onClickActionButton}
          color="primary"
          size="medium"
          sx={{ mt: -3 }}
        >
          {props.actionButtonIcon}
        </Fab>
        <IconButton onClick={() => navigate('/shopping-list')} sx={{ mx: 5 }}>
          <ShoppingCartIcon />
        </IconButton>
      </BottomNavigation>
    </Paper>
  );
};
