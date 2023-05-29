import React, { useState } from 'react';

const AddDishModal: React.FC = () => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [available, setAvailable] = useState('yes');

  const handleAddDish = () => {
    // Logic to handle adding the dish
    // You can access the values of the fields (dishName, description, price, type, available) here
  };

  return (
    <div className="bg-white ml-5 p-3 rounded-2xl drop-shadow">
      <h2 className="text-2xl font-bold mb-4">Add Item</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="ItemName" className="block mb-1">Item Name:</label>
          <input
            type="text"
            id="ItemName"
            className="border border-gray-300 px-2 py-1 w-full"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="block mb-1">Description:</label>
          <textarea
            id="description"
            className="border border-gray-300 px-2 py-1 w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="block mb-1">Price:</label>
          <input
            type="text"
            id="price"
            className="border border-gray-300 px-2 py-1 w-full"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="type" className="block mb-1">Type:</label>
          <select
            id="type"
            className="border border-gray-300 px-2 py-1 w-full"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Select type</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
            <option value="type3">Type 3</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="block mb-1">Available:</label>
          <div>
            <label className="mr-2">
              <input
                type="radio"
                value="yes"
                checked={available === 'yes'}
                onChange={() => setAvailable('yes')}
              />
              <span className="ml-1">Yes</span>
            </label>
            <label>
              <input
                type="radio"
                value="no"
                checked={available === 'no'}
                onChange={() => setAvailable('no')}
              />
              <span className="ml-1">No</span>
            </label>
          </div>
        </div>
        <button
          type="button"
          onClick={handleAddDish}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddDishModal;
