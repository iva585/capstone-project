import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShoppingList from './pages/ShoppingList/ShoppingList';
import Inventory from './pages/Inventory/Inventory';
import RecipeDetail from './pages/RecipeDetail/RecipeDetail';

export default (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="/shopping-list" element={<ShoppingList />} />
    </Routes>
    <Routes>
      <Route path="/inventory" element={<Inventory />} />
    </Routes>
    <Routes>
      <Route path="/1" element={<RecipeDetail />} />
    </Routes>
  </BrowserRouter>
);
