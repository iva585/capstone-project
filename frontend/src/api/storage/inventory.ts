import type { InventoryItemType } from '../../components/InventoryItem';

const LOCAL_STORAGE_KEY = 'inventory';

const getAllInventoryItemsFromStorage = (): InventoryItemType[] => {
  const inventoryItems: string | null = localStorage.getItem(LOCAL_STORAGE_KEY);

  return inventoryItems ? JSON.parse(inventoryItems) : [];
};

const setItems = (items: InventoryItemType[]): void => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
};

const addInventoryItemToStorage = (
  title: InventoryItemType['title']
): InventoryItemType => {
  const items = getAllInventoryItemsFromStorage();

  const sortedbyIds = [...items].sort((a, b) => a.id - b.id);

  const lastElement = sortedbyIds.pop();

  const id: InventoryItemType['id'] = lastElement?.id ? lastElement.id + 1 : 1;

  const newItem = {
    id,
    title,
    checked: false,
  };

  setItems([...items, newItem]);

  return newItem;
};

const removeInventoryItemFromStorage = (id: number): void => {
  const items = getAllInventoryItemsFromStorage();

  setItems(items.filter((item) => item.id !== id));
};

const updateInventoryItemInStorage = (data: InventoryItemType): void => {
  const items = getAllInventoryItemsFromStorage();
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
  getAllInventoryItemsFromStorage,
  addInventoryItemToStorage,
  removeInventoryItemFromStorage,
  updateInventoryItemInStorage,
};
