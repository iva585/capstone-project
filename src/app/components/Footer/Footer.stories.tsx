import Add from '@mui/icons-material/Add';
import Close from '@mui/icons-material/Close';
import React from 'react';
import Footer from '.';

export default {
  title: 'Component/Footer',
  component: Footer,
};

export const AddFooter = (): JSX.Element => (
  <Footer
    actionButtonIcon={<Add />}
    onClickActionButton={function (): void {
      throw new Error('Function not implemented.');
    }}
  />
);

export const CloseFooter = (): JSX.Element => (
  <Footer
    actionButtonIcon={<Close />}
    onClickActionButton={function (): void {
      throw new Error('Function not implemented.');
    }}
  />
);
