import { create } from "zustand";
import { dish } from "../types/types";
import { getDishesData } from "../services/dishService";

interface appState {
  option: string;
  totalPages: number;
  currentPage: number;
  changeOption: (str: string) => void;
  dishData: dish[];
  updateDishData: (data: dish[]) => void;
  fetchDishes: (str: string, pageNo: number | null) => Promise<void>;
}

export const DashboardState = create<appState>()((set) => ({
  option: "dash",
  dishData: [],
  totalPages: 1,
  currentPage: 1,
  changeOption: (type: string) => set(() => ({ option: type })),
  updateDishData: (data: dish[]) => set(() => ({ dishData: data })),
  fetchDishes: async (searchStr: string, pageNo: number | null) => {
    console.log(searchStr, "Triggere");
    try {
      const { dishData, totalPages, currentPage } = await getDishesData(
        searchStr, pageNo
      );
      set({
        dishData: dishData,
        totalPages: totalPages,
        currentPage: currentPage,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  },
}));
