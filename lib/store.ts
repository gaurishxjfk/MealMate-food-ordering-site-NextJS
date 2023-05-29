import { create } from "zustand";

interface Product {
  id: number;
  name: string;
  price: number;
  qty: number;
}
interface Item {
  id: number;
  name: string;
  price: number;
  type: string[];
}

interface appState {
  dialogueType: string;
  changeDialogueType: (type: string) => void;
  cartItems: Product[];
  addToCart: (item: Product) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  removeItemCart: (id: number) => void;
  sortMenuItems: (type: string) => void;
  sortedMenuItems: Item[];
  //toggleCart: (by: number) => void;
}

export const appStore = create<appState>()((set) => ({
  dialogueType: "",
  changeDialogueType: (str: string) =>
    set((state) => ({ dialogueType: state.dialogueType === str ? "" : str })),
  cartItems: [],
  addToCart: (item: Product) =>
    set((state) => {
      if (!state.cartItems.some((i) => i.id == item.id)) {
        return { cartItems: [...state.cartItems, item] };
      } else {
        return {
          cartItems: state.cartItems.map((i) =>
            i.id == item.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }
    }),
  increaseQty: (id: number) =>
    set((state) => ({
      cartItems: state.cartItems.map((i) =>
        i.id == id ? { ...i, qty: i.qty + 1 } : i
      ),
    })),
  decreaseQty: (id: number) =>
    set((state) => ({
      cartItems: state.cartItems.map((i) =>
        i.id == id ? { ...i, qty: i.qty - 1 } : i
      ),
    })),
  removeItemCart: (id: number) =>
    set((state) => ({
      cartItems: state.cartItems.filter((i) => i.id !== id),
    })),
  sortedMenuItems: [],
  sortMenuItems: async (str: string) => {
    try {
      const response = await fetch("/api/hello");
      const data = await response.json();
      set(() => ({
        sortedMenuItems:
          str.toLowerCase() === "all"
            ? data
            : data.filter((item: Item) => {
                return item.type.includes(str);
              }),
      }));
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  },
}));
