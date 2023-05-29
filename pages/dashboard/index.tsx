import React from "react";
import Sidebar from "../../components/dashboard/sidebar";
import AddDishModal from "../../components/dashboard/addDishModal";

const index = () => {
  return (
    <main className="bg-gray-100  p-5 flex">
      <section className="w-[20%] rounded-full">
        <Sidebar />
      </section>
      <section className="w-[80%] rounded-full">
        <AddDishModal />
      </section>
    </main>
  );
};

export default index;
