import Image from "next/image";
import React, { useEffect as appEffect, useState as appState } from "react";
import Dashboard from "../index";
import { Trash, Edit2 } from "react-feather";
import ManageItems from "../../../components/dashboard/manageItems";
import AddDishModal from "../../../components/dashboard/addDishModal";
import { appStore } from "../../../lib/store";
import { dish } from "../../../types/types";
import { deleteDish } from "../../../services/dishService";
import { DashboardState } from "../../../lib/dashboardStore";
import Loader from "../../../components/other/Loader";

const index = () => {
  const { changeDialogueType } = appStore((state) => state);
  const { fetchDishes, dishData, totalPages, currentPage } = DashboardState(
    (state) => state
  );
  const [selectedItem, setSelectedItem] = appState<dish | null>(null);
  const [searchQuery, setSearchQuery] = appState("");

  const handlePageChange = (pageNumber) => {
    console.log(pageNumber);
    fetchDishes(searchQuery, pageNumber);
  };

  appEffect(() => {
    fetchDishes("", null);
  }, []);
  const handleDelete = async (id: number) => {
    try {
      const deletedDish = await deleteDish(id);
      console.log("Dish deleted:", deletedDish);
      await fetchDishes("", null);
    } catch (error) {
      console.error("Error deleting dish:", error);
    }
  };
  return (
    <Dashboard>
      <ManageItems searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <AddDishModal itemData={dishData ? selectedItem : null} />

      <section className="bg-white ml-5 p-3 rounded-2xl drop-shadow mt-2 ">
        {dishData.length < 1 ? (
          <Loader />
        ) : (
          <>
            <ul>
              {dishData.map((dish: dish) => (
                <li key={dish.id} className="mb-2">
                  <div className="grid grid-cols-12 p-2 shadow-md bg-gray-100 rounded-lg my-1 justify-between items-center	">
                    <div className="col-span-2">
                      <Image
                        src={dish.image}
                        alt={dish.dishName}
                        height={5}
                        width={5}
                        className="h-[5em] w-[5em] rounded-full"
                      />
                    </div>
                    <div className="col-span-4 text-left">
                      <h1 className="font-bold">{dish.dishName}</h1>
                      <i className="text-gray-700">{dish.description}</i>
                    </div>
                    <div className="col-span-4 ">
                      <div className="flex gap-5">
                        <span className="font-bold">₹{dish.price}</span>
                        <span
                          className={`${
                            dish.available ? "bg-green-600" : "bg-red-500"
                          } px-2 rounded-lg text-white`}
                        >
                          {dish.available ? "Available" : "Unavailable"}
                        </span>
                      </div>
                      <div className="">
                        <i>{dish.tagsArr.join(",")} </i>
                      </div>
                    </div>
                    <div className="col-span-2 flex justify-evenly">
                      <button
                        className=" hover:text-green-700"
                        onClick={() => {
                          setSelectedItem(dish);
                          changeDialogueType("editItem");
                        }}
                      >
                        <Edit2 />
                      </button>
                      <button
                        className=" hover:text-red-700"
                        onClick={() => handleDelete(dish.id)}
                      >
                        <Trash />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div>
              {totalPages > 1 && (
                <ul className="flex justify-center">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <li
                      key={index}
                      className={`${
                        currentPage === index + 1
                          ? "border border-[#00412B] bg-white text-[#00412B]"
                          : "text-white"
                      } bg-[#00412B] m-2 p-3 py-1  rounded-full cursor-pointer`}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </>
        )}
      </section>
    </Dashboard>
  );
};
// export async function getServerSideProps() {
//   const dishes = await getDishesData();
//   return {
//     props: {
//       dishes,
//     },
//   };
// }

export default index;
