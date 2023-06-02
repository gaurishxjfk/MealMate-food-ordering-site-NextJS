import { create } from "zustand";
import { dish } from "../types/types";
import { getDishesData } from "../services/dishService";

interface appState {
  option: string;
  changeOption: (str: string) => void;
  dishData: dish[];
  updateDishData: (data: dish[]) => void;
  fetchDishes: (str: string) => Promise<void>;
}

export const DashboardState = create<appState>()((set) => ({
  option: "dash",
  dishData: [],
  changeOption: (type: string) => set(() => ({ option: type })),
  updateDishData: (data: dish[]) => set(() => ({ dishData: data })),
  fetchDishes: async (searchStr: string) => {
    console.log(searchStr,"Triggere")
    try {
      const dishData = await getDishesData(searchStr);
      set({ dishData: dishData });
    } catch (error) {
      console.error("Error:", error);
    }
  },
}));
