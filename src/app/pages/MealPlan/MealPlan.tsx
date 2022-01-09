import Add from '@mui/icons-material/Add';
import Close from '@mui/icons-material/Close';
import { CssBaseline } from '@mui/material';
import React, { useState } from 'react';
import FooterDefault from '../../components/Footers/FooterDefault';
import Header from '../../components/Headers/HeaderDefault';

export default (): JSX.Element => {
  const [editing, setEditing] = useState<boolean>(false);
  return (
    <>
      <CssBaseline />
      <Header children="Meal Plan" />

      <FooterDefault
        actionButtonIcon={editing ? <Close /> : <Add />}
        onClickActionButton={() => setEditing((editing) => !editing)}
      />
    </>
  );
};
