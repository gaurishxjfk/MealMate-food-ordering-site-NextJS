export interface dish {
  dishName: string;
  id: number;
  image: string;
  description: string;
  price: number;
  available: boolean;
  tagsArr: string[];
}

export type cardProps = {
  id: number;
  name: string;
  price: number;
  img: string;
  isMenu: boolean;
};

export interface cartItemProps {
  item: Item;
}

export interface Item {
  name: string;
  qty: number;
  price: number;
  id: number;
}

export interface reviewCard {
  color: string;
  rating: number;
}
