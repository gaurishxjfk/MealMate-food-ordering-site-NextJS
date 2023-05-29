import React, { useState } from "react";
import { BarChart, Bell, Database, Disc, DollarSign } from "react-feather";

const sidebar: React.FC = () => {
  const [option, setOption] = useState("dash");
  return (
    <div className="bg-white m-0 text-[#00412B] flex flex-col gap-5 p-5 rounded-2xl drop-shadow">
      <div
        className={`flex gap-4 ${
            option === "dash" && "font-bold bg-[#00412B] text-white"
        } hover:bg-[#00412B] hover:text-white hover:font-bold transition-all rounded-full p-2 cursor-pointer`}
        onClick={() => setOption("dash")}
      >
        <span>
          <Database />
        </span>
        <label htmlFor="dashboard">Dashboard</label>
      </div>
      <div
        className={`flex gap-4 ${
            option === "items" && "font-bold bg-[#00412B] text-white"
        } hover:bg-[#00412B] hover:text-white hover:font-bold transition-all rounded-full p-2 cursor-pointer`}
        onClick={() => setOption("items")}
      >
        <span>
          <DollarSign />
        </span>
        <label htmlFor="Manage Items">Manage Items</label>
      </div>
      <div
        className={`flex gap-4 ${
            option === "misc" && "font-bold bg-[#00412B] text-white"
        } hover:bg-[#00412B] hover:text-white hover:font-bold transition-all rounded-full p-2 cursor-pointer`}
        onClick={() => setOption("misc")}
      >
        <span>
          <Disc />
        </span>
        <label htmlFor="Misc">Misc</label>
      </div>
      <div
        className={`flex gap-4 ${
            option === "notf" && "font-bold bg-[#00412B] text-white"
        } hover:bg-[#00412B] hover:text-white hover:font-bold transition-all rounded-full p-2 cursor-pointer`}
        onClick={() => setOption("notf")}
      >
        <span>
          <Bell />
        </span>
        <label htmlFor="Notification">Notification</label>
      </div>
      <div
        className={`flex gap-4 ${
          option === "chat" && "font-bold bg-[#00412B] text-white"
        } hover:bg-[#00412B] hover:text-white hover:font-bold transition-all rounded-full p-2 cursor-pointer`}
        onClick={() => setOption("chat")}
      >
        <span>
          <BarChart />
        </span>
        <label htmlFor="Chat">Chat</label>
      </div>
    </div>
  );
};

export default sidebar;
