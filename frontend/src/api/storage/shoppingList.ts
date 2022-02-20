import type { ShoppingListItemType } from '../../components/ShoppingListItem';

const LOCAL_STORAGE_KEY = 'shopping-list';

const getAllShoppingListItemsFromStorage = (): ShoppingListItemType[] => {
  const ShoppingListItems: string | null =
    localStorage.getItem(LOCAL_STORAGE_KEY);

  return ShoppingListItems ? JSON.parse(ShoppingListItems) : [];
};

const setItems = (items: ShoppingListItemType[]): void => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
};

const addShoppingListItemToStorage = (
  title: ShoppingListItemType['title']
): ShoppingListItemType => {
  const items = getAllShoppingListItemsFromStorage();

  const sortedbyIds = [...items].sort((a, b) => a.id - b.id);

  const lastElement = sortedbyIds.pop();

  const id: ShoppingListItemType['id'] = lastElement?.id
    ? lastElement.id + 1
    : 1;

  const newItem = {
    id,
    title,
    checked: false,
  };

  setItems([...items, newItem]);

  return newItem;
};

const removeShoppingListItemFromStorage = (id: number): void => {
  const items = getAllShoppingListItemsFromStorage();

  setItems(items.filter((item) => item.id !== id));
};

const updateShoppingListItemInStorage = (data: ShoppingListItemType): void => {
  const items = getAllShoppingListItemsFromStorage();
  setItems(
    items.map((item) => {
      if (item.id === data.id) {
        return data;
      }
      return item;
    })
  );
};

export {
  getAllShoppingListItemsFromStorage,
  addShoppingListItemToStorage,
  removeShoppingListItemFromStorage,
  updateShoppingListItemInStorage,
};
