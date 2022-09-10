
export interface FoodCategory {
  name: string;
  image: string;
  items: PantryItem[] | ShoppingListItem[];
};

export interface PantryItem {
  name: string;
  comment: string;
};

export interface ShoppingListItem extends PantryItem {
  price: string;
};
