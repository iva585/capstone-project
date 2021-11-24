import { Typography } from '@mui/material';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Typography>Hello World</Typography>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
