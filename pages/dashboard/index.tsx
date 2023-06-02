import React, { ReactNode } from "react";
import Sidebar from "../../components/dashboard/sidebar";
interface LayoutProps {
  children: ReactNode;
}

const index: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="bg-gray-100 p-5 flex">
      <section className="w-[20%] rounded-full">
        <Sidebar />
      </section>
      <section className="w-[80%] rounded-full relative">
        <main>{children}</main>
      </section>
    </main>
  );
};

export default index;
