import React, { useEffect as appEffect, useState as appState } from "react";
import { appStore } from "../../lib/store";
import InputEl from "../other/inputEl";
import InputTags from "../other/InputTags";
import { X } from "react-feather";

import Image from "next/image";
import { createDish, updateDish } from "../../services/dishService";
import { dish } from "../../types/types";
import { DashboardState } from "../../lib/dashboardStore";

const suggestions = [
  "All",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Dessert",
  "Beavrages",
];

const AddDishModal: React.FC<{ itemData: dish }> = ({ itemData }) => {
  const { dialogueType, changeDialogueType } = appStore((state) => state);
  const { fetchDishes } = DashboardState((state) => state);

  const [dishName, setDishName] = appState("");
  const [description, setDescription] = appState("");
  const [price, setPrice] = appState("");
  const [available, setAvailable] = appState("yes");
  const [image, setImage] = appState<string | null>(null);
  const [tagsArr, setTagsArr] = appState<string[]>([]);

  const resetForm = () => {
    setDishName("");
    setDescription("");
    setPrice("");
    setAvailable("yes");
    setImage(null);
    setTagsArr([]);
  };

  const getDishData = () => {
    return {
      dishName: dishName,
      description: description,
      price: parseFloat(price),
      available: available === "yes",
      tagsArr: tagsArr,
      image: image,
      id: dialogueType === "addItem" ? null : itemData?.id,
    };
  };

  appEffect(() => {
    if (itemData?.dishName) {
      setDishName(itemData.dishName);
      setDescription(itemData.description);
      setPrice(itemData.price.toString());
      setAvailable(itemData.available ? "yes" : "no");
      setImage(itemData.image);
      setTagsArr(itemData.tagsArr);
    }
  }, [itemData]);

  const handleAddDish = async () => {
    if (!image) {
      console.log("Please select an image");
      return;
    }
    dialogueType === "addItem"
      ? await createDish(getDishData())
      : await updateDish(getDishData());
    resetForm();
    await fetchDishes("", null);
    changeDialogueType("");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedImage = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          const base64Image = event.target.result as string;
          setImage(base64Image);
        }
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  if (dialogueType === "addItem" || dialogueType === "editItem")
    return (
      <div className="bg-white ml-5 p-3 rounded-2xl drop-shadow absolute w-[70%] top-[-.5em] z-50 left-[15%] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
        <header className="text-2xl font-bold mb-2 flex justify-between pr-4">
          <span className="text-[#00412B] px-2">
            {dialogueType === "addItem" ? "Add Item" : "Edit Item"}
          </span>
          <button
            onClick={() => changeDialogueType("")}
            className="text-gray-600"
          >
            <X />
          </button>
        </header>
        <form className="text-[#00412B] text-center">
          <InputEl
            name="Item Name"
            value={dishName}
            type={"text"}
            setName={setDishName}
          />

          <div className="bg-[#ffffff] p-2 rounded-lg w-full">
            <div className="relative bg-inherit">
              <textarea
                id="description"
                name="description"
                className="peer bg-transparent  w-full rounded-lg text-[#00412B] placeholder-transparent ring-[.1em] px-2 pt-1 ring-[#488A74] focus:ring-[#00412B] focus:outline-none focus:border-rose-600"
                placeholder="Item Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <label
                htmlFor="description"
                className="absolute cursor-text left-0 -top-3 text-sm text-[#00412B] bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[#00412B] peer-focus:text-sm transition-all"
              >
                Item Description
              </label>
            </div>
          </div>
          <InputEl
            name="Price"
            value={price}
            type={"number"}
            setName={setPrice}
          />

          <div className="w-full p-2 pb-0 flex gap-2">
            <label className="block mb-1">Available:</label>
            <div>
              <label className="mr-2">
                <input
                  type="radio"
                  value="yes"
                  className="cursor-pointer"
                  checked={available === "yes"}
                  onChange={() => setAvailable("yes")}
                />
                <span className="ml-1">Yes</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="no"
                  className="cursor-pointer "
                  checked={available === "no"}
                  onChange={() => setAvailable("no")}
                />
                <span className="ml-1">No</span>
              </label>
            </div>
          </div>
          <div className="w-full">
            <InputTags
              suggestions={suggestions}
              tagsArr={tagsArr}
              setTagsArr={setTagsArr}
            />
          </div>
          <div className="w-full p-2 text-left flex gap-3 items-center mt-2">
            {dialogueType === "editItem" && image !== null ? (
              <Image
                src={image}
                alt={dishName}
                height={5}
                width={5}
                className="h-[5em] w-[5em] rounded-full"
              />
            ) : (
              <label htmlFor="image" className="block mb-1">
                Image:
              </label>
            )}
            <input
              type="file"
              id="image"
              className="border border-[#488A74] px-2 py-1 w-full"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <button
            type="button"
            onClick={handleAddDish}
            className="w-[70%]  group [transform:translateZ(0)] px-6 py-3 rounded-lg overflow-hidden bg-[#E9F9F3] border-2 font-bold border-[#488A74] relative before:absolute before:bg-[#488A74] before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[16] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500"
          >
            <span className="relative z-0 text-[#488A74] group-hover:text-white transition ease-in-out duration-500">
              {dialogueType === "addItem" ? "Add" : "Update"}
            </span>
          </button>
        </form>
      </div>
    );
};

export default AddDishModal;
