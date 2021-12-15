import type { Recipe } from '../../pages/RecipeDetail/RecipeDetail';

const LOCAL_STORAGE_KEY = 'recipes';

const getAllRecipeItemsFromStorage = (): Recipe[] => {
  const recipes: string | null = localStorage.getItem(LOCAL_STORAGE_KEY);

  return recipes ? JSON.parse(recipes) : [];
};

const setItems = (items: Recipe[]): void => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
};

const addRecipeItemToStorage = (newRecipeData: Omit<Recipe, 'id'>): Recipe => {
  const items = getAllRecipeItemsFromStorage();

  const sortedbyIds = [...items].sort((a, b) => a.id - b.id);

  const lastElement = sortedbyIds.pop();

  const id: Recipe['id'] = lastElement?.id ? lastElement.id + 1 : 1;

  const newItem: Recipe = {
    id,
    ...newRecipeData,
  };

  setItems([...items, newItem]);

  return newItem;
};

const removeRecipeItemFromStorage = (id: number): void => {
  const items = getAllRecipeItemsFromStorage();

  setItems(items.filter((item) => item.id !== id));
};

export {
  getAllRecipeItemsFromStorage,
  addRecipeItemToStorage,
  removeRecipeItemFromStorage,
};
