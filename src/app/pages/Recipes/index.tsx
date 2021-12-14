import React, { useState } from 'react';
import Footer from '../../components/Footer';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';

export default (): JSX.Element => {
  const [newRecipe, setNewRecipe] = useState<boolean>(false);
  return (
    <Footer
      actionButtonIcon={newRecipe ? <DoneOutlinedIcon /> : <EditOutlinedIcon />}
      onClickActionButton={() => setNewRecipe((newRecipe) => !newRecipe)}
    />
  );
};
