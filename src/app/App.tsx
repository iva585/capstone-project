import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShoppingList from './pages/ShoppingList/ShoppingList';
import Inventory from './pages/Inventory/Inventory';
import RecipeDetail from './pages/RecipeDetail/RecipeDetail';
import Recipes from './pages/Recipes';
import NotFound from './errors/NotFound';

export default (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Recipes />} />
      <Route path="/shopping-list" element={<ShoppingList />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/recipe/:recipeId" element={<RecipeDetail />} />

      {/* fallback if no route was found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
