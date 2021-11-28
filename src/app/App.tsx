import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShoppingList from './pages/ShoppingList/ShoppingList';

export default (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="/shopping-list" element={<ShoppingList />} />
    </Routes>
  </BrowserRouter>
);
