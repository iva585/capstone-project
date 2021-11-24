import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShoppingList from './pages/ShoppingList/ShoppingList';

// @TODO - replace with actual storage layer
const mockItems = [
  { title: 'milk' },
  { title: 'oatmeal' },
  { title: 'chocolate' },
  { title: 'bananas' },
];

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShoppingList items={mockItems} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
