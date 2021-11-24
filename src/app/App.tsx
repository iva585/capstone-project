import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import type { ShoppingListItemType } from './components/ShoppingListItem';
import ShoppingList from './pages/ShoppingList/ShoppingList';

// @TODO - replace with actual storage layer
const mockItems: ShoppingListItemType[] = [
  { id: 1, title: 'milk', checked: false },
  { id: 2, title: 'oatmeal', checked: false },
  { id: 3, title: 'chocolate', checked: true },
  { id: 4, title: 'bananas', checked: false },
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
