import { Paper, BottomNavigation, Fab } from '@mui/material';
import React from 'react';

type Props = {
  actionButtonIcon: JSX.Element;
  onClickActionButton: () => void;
};

export default (props: Props): JSX.Element => {
  return (
    <>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
        <BottomNavigation>
          <Fab
            onClick={props.onClickActionButton}
            color="primary"
            size="medium"
            sx={{ mt: -3 }}
          >
            {props.actionButtonIcon}
          </Fab>
        </BottomNavigation>
      </Paper>
    </>
  );
};
