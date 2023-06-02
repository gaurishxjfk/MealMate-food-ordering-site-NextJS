import Link from "next/link";
import React, { useEffect as appEffect } from "react";
import { BarChart, Bell, Grid, Disc, List } from "react-feather";
import { DashboardState } from "../../lib/dashboardStore";
import { useRouter as router } from "next/router";

const Sidebar: React.FC = () => {
  const { option, changeOption } = DashboardState((state) => state);
  const { pathname } = router();

  appEffect(() => {
    if (pathname.includes("manage_items")) {
      changeOption("items");
    }
  }, []);

  return (
    <div className="bg-white m-0 text-[#00412B] flex flex-col gap-5 p-5 rounded-2xl drop-shadow">
      <Link
        href={"/dashboard"}
        className={`flex gap-4 ${
          option === "dash" && "font-bold bg-[#00412B] text-white"
        } hover:bg-[#00412B] hover:text-white hover:font-bold transition-all rounded-full p-2 cursor-pointer`}
        onClick={() => changeOption("dash")}
      >
        <span>
          <Grid />
        </span>
        <label htmlFor="dashboard">Dashboard</label>
      </Link>
      <Link
        className={`flex gap-4 ${
          option === "items" && "font-bold bg-[#00412B] text-white"
        } hover:bg-[#00412B] hover:text-white hover:font-bold transition-all rounded-full p-2 cursor-pointer`}
        onClick={() => changeOption("items")}
        href={"/dashboard/manage_items"}
      >
        <span>
          <List />
        </span>
        <label htmlFor="Manage Items">Manage Items</label>
      </Link>
      <Link
        href={"/dashboard"}
        className={`flex gap-4 ${
          option === "misc" && "font-bold bg-[#00412B] text-white"
        } hover:bg-[#00412B] hover:text-white hover:font-bold transition-all rounded-full p-2 cursor-pointer`}
        onClick={() => changeOption("misc")}
      >
        <span>
          <Disc />
        </span>
        <label htmlFor="Misc">Misc</label>
      </Link>
      <Link
        href={"/dashboard"}
        className={`flex gap-4 ${
          option === "notf" && "font-bold bg-[#00412B] text-white"
        } hover:bg-[#00412B] hover:text-white hover:font-bold transition-all rounded-full p-2 cursor-pointer`}
        onClick={() => changeOption("notf")}
      >
        <span>
          <Bell />
        </span>
        <label htmlFor="Notification">Notification</label>
      </Link>
      <Link
        href={"/dashboard"}
        className={`flex gap-4 ${
          option === "chat" && "font-bold bg-[#00412B] text-white"
        } hover:bg-[#00412B] hover:text-white hover:font-bold transition-all rounded-full p-2 cursor-pointer`}
        onClick={() => changeOption("chat")}
      >
        <span>
          <BarChart />
        </span>
        <label htmlFor="Chat">Chat</label>
      </Link>
    </div>
  );
};

export default Sidebar;
