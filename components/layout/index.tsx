import React, { Fragment, ReactNode } from "react";
import Nav from "../nav";
import Cart from "../cart";
import { UseAppStore } from "../../lib/store";
import { AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

const index: React.FC<LayoutProps> = ({ children }) => {
  const isCart = UseAppStore((state) => state.isCart);
  return (
    <Fragment>
      <Nav />
      <AnimatePresence>{isCart ? <Cart /> : ""}</AnimatePresence>

      <main>{children}</main>
    </Fragment>
  );
};

export default index;
