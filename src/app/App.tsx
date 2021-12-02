import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShoppingList from './pages/ShoppingList/ShoppingList';
import Inventory from './pages/Inventory/Inventory';

export default (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="/shopping-list" element={<ShoppingList />} />
    </Routes>
    <Routes>
      <Route path="/inventory" element={<Inventory />} />
    </Routes>
  </BrowserRouter>
);
