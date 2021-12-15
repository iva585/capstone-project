import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShoppingList from './pages/ShoppingList/ShoppingList';
import Inventory from './pages/Inventory/Inventory';
import RecipeDetail from './pages/RecipeDetail/RecipeDetail';
import Recipes from './pages/Recipes';

export default (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Recipes />} />
      <Route path="/shopping-list" element={<ShoppingList />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
    </Routes>
  </BrowserRouter>
);
