import { create } from "zustand";

interface appState {
  isAcc: boolean;
  toggleAccount: () => void;
  // cartItems: Product[];
  // addToCart: (item: Product) => void;
  // increaseQty: (id: number) => void;
  // decreaseQty: (id: number) => void;
  // removeItemCart: (id: number) => void;
  // sortMenuItems: (type: string) => void;
  // sortedMenuItems: Item[];
  //toggleCart: (by: number) => void;
}

export const UserStore = create<appState>()((set) => ({
  isAcc: false,
  toggleAccount: () => set((state) => ({ isAcc: !state.isAcc })),
}));
