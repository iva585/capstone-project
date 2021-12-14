import { Card, CardContent, Input } from '@mui/material';
import React from 'react';

export default (): JSX.Element => {
  return (
    <Card
      sx={{
        alignSelf: 'center',
        width: '70%',
        p: 0,
        borderRadius: '20px',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Input placeholder="Add Recipe Title Here" />

        <Input placeholder="Add Description Here" />
      </CardContent>
    </Card>
  );
};
