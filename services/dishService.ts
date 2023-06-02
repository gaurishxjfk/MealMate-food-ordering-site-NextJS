import { dish } from "../types/types";
import axios from "axios";

export const getDishesData = async (name: string) => {
  try {
    const url = name
      ? `http://localhost:3000/api/manageitems/getdish?name=${encodeURIComponent(
          name
        )}`
      : "http://localhost:3000/api/manageitems/getdish";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const dishData = await response.json();
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
    const response = await fetch("/api/manageitems/createdish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dishData),
    });

    if (response.ok) {
      const createdDish = await response.json();
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
    const response = await fetch("/api/manageitems/createdish", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dishData),
    });

    if (response.ok) {
      const updatedDish = await response.json();
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
    const response = await axios.delete("/api/manageitems/deletedish/"+dishId);
    console.log(response,"yahi hu mai")
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to delete dish");
  }
};
