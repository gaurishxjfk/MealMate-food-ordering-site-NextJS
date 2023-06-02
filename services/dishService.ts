import { dish } from "../types/types";
import axios from "axios";

export const getDishesData = async (name: string, currentPage: number) => {
  try {
    const url = name
      ? `http://localhost:3000/api/manageitems/getdish?name=${encodeURIComponent(
          name
        )}&page=${currentPage}`
      : `http://localhost:3000/api/manageitems/getdish?page=${currentPage}`;
    const response = await axios.get(url);
    if (response.status === 200) {
      const dishData = response.data;
      return dishData;
    } else {
      console.error("Error:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

export const createDish = async (dishData: dish) => {
  try {
    const response = await axios.post("/api/manageitems/createdish", dishData);

    if (response.status === 201) {
      const createdDish = response.data;
      console.log(createdDish);
      return createdDish;
    } else {
      console.error("Error:", response.status);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const updateDish = async (dishData: dish) => {
  try {
    const response = await axios.patch("/api/manageitems/createdish",dishData);

    if (response.status === 201) {
      const updatedDish = response.data;
      console.log(updatedDish);
      return updatedDish;
    } else {
      console.error("Error:", response.status);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const deleteDish = async (dishId: number) => {
  try {
    const response = await axios.delete(
      "/api/manageitems/deletedish/" + dishId
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to delete dish");
  }
};
