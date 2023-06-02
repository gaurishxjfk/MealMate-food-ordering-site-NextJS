import React, { useEffect as appEffect, useState as appState } from "react";
import { appStore } from "../../lib/store";
import { Search } from "react-feather";
import { DashboardState } from "../../lib/dashboardStore";
// const options = ["All", "Breakfast", "Lunch", "Dinner", "Dessert", "Beavrages"];

interface manageItemsProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
  searchQuery: string
}

const ManageItems: React.FC<manageItemsProps> = ({searchQuery,setSearchQuery}) => {
  const { changeDialogueType } = appStore((state) => state);
  const { fetchDishes } = DashboardState((state) => state);

  
  const [debouncedSearchQuery, setDebouncedSearchQuery] = appState("");

  appEffect(() => {
    const delaySearch = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 700);
    return () => clearTimeout(delaySearch);
  }, [searchQuery]);

  appEffect(() => {
    
      fetchDishes(debouncedSearchQuery,null);
  }, [debouncedSearchQuery]);

  return (
    <section className="bg-white ml-5  rounded-2xl drop-shadow" >
      <header className="text-[#488A74] w-fit font-bold w- bg-[#E9F9F3] rounded-t-2xl rounded-r-none p-2 px-12">
        Manage Items
      </header>
      <div className="mt-5 flex justify-evenly items-end p-3">
        <div className="relative w-[60%]">
          <input
            type="text"
            className="border-b-2 outline-none w-full pr-6"
            placeholder="Search for item"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="absolute right-0"
            onClick={() => fetchDishes(searchQuery,null)}
          >
            <Search color="gray" />
          </button>
        </div>
        {/* <div className="relative">
        <button
          className="bg-gray-100 p-2  rounded-full "
          onClick={() => changeDialogueType("filter")}
        >
          <Filter color="gray" height={'1.3em'} width={'1.3em'}/>
        </button>
         <div className={`absolute bg-white px-3 right-0 ${dialogueType === 'filter' ? "block" : "hidden"} z-50 h-[40vh]`}>
          {options.map((optn, ind) => (
            <div key={ind}>{optn}</div>
          ))}
        </div> 
        </div> */}
        
        <button
          className="bg-[#E9F9F3] px-3 py-2 rounded-lg font-bold text-[#488A74]"
          onClick={() => changeDialogueType("addItem")}
        >
          Add Item
        </button>
      </div>
    </section>
  );
};

export default ManageItems;
