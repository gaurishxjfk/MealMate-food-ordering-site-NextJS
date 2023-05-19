import { NextApiRequest, NextApiResponse } from 'next';
const btnArr = ["All", "Breakfast", "Lunch", "Dinner", "Dessert", "Beavrages"];

const products = [
  {
    id: 1,
    name: "Hamburger with fast food Hamburger with fast ",
    price: 300,
    type: ["breakfast"]
  },
  {
    id: 2,
    name: "Pizza",
    price: 500,
    type: ["breakfast"]
  },
  {
    id: 3,
    name: "Chicken Teriyaki with steamed rice",
    price: 450,
    type: ["Lunch", "Dinner"]
  },
  {
    id: 4,
    name: "Spaghetti Bolognese with garlic bread",
    price: 350,
    type: ["Lunch"]
  },
  {
    id: 5,
    name: "Sushi Combo with miso soup",
    price: 600,
    type: ["Dinner", "Dessert"]
  },
  {
    id: 6,
    name: "Steak with mashed potatoes and veggies",
    price: 800,
    type: ["Dessert"]
  },
  {
    id: 7,
    name: "Salmon Salad with balsamic dressing",
    price: 400,
    type: ["Dessert"]
  },
  {
    id: 8,
    name: "Pancakes with maple syrup and berries",
    price: 250,
    type: [ "Dinner", "Dessert", "Beavrages"]
  },
  {
    id: 9,
    name: "Veggie Wrap with hummus and veggies",
    price: 350,
    type: [ "Dessert"]
  },
  {
    id: 10,
    name: "Fish and Chips with tartar sauce",
    price: 450,
    type: ["Breakfast", "Lunch", "Dinner", "Dessert", "Beavrages"]
  },
  {
    id: 11,
    name: "Fried Rice with shrimp and vegetables",
    price: 400,
    type: [ "Beavrages"]
  },
  {
    id: 12,
    name: "Caesar Salad with grilled chicken",
    price: 350,
    type: ["Breakfast", "Lunch", "Dinner", "Dessert", "Beavrages"]
  },
  {
    id: 13,
    name: "Beef Burrito with guacamole and salsa",
    price: 450,
    type: ["Breakfast", "Lunch", "Dinner", "Dessert", "Beavrages"]
  },
  {
    id: 14,
    name: "Mushroom Risotto with truffle oil",
    price: 400,
    type: [ "Beavrages"]
  },
  {
    id: 15,
    name: "Chicken Tikka Masala with naan bread",
    price: 500,
    type: [ "Lunch", "Beavrages"]
  },
  {
    id: 16,
    name: "Cheeseburger with fries and soft drink",
    price: 400,
    type: ["Breakfast", "Lunch", "Dinner", "Dessert", "Beavrages"]
  },
  {
    id: 17,
    name: "Shrimp Pad Thai with peanuts and lime",
    price: 450,
    type: ["Breakfast", "Lunch", "Dinner", "Dessert", "Beavrages"]
  },
  {
    id: 18,
    name: "Miso Ramen with pork and egg",
    price: 400,
    type: ["Breakfast", "Lunch", "Dinner", "Dessert", "Beavrages"]
  },
  {
    id: 19,
    name: "BBQ Ribs with coleslaw and cornbread",
    price: 600,
    type: ["Breakfast", "Lunch", "Dinner", "Dessert", "Beavrages"]
  }
];

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(products);
}
