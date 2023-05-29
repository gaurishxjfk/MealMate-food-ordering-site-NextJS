import React, { Fragment, ReactNode } from "react";
import Nav from "../nav";
import Cart from "../cart";
import Account from "../account";
import DialoguePopOver from "./dialoguePopOver";
import { appStore } from "../../lib/store";
import { AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

const index: React.FC<LayoutProps> = ({ children }) => {
  const { dialogueType } = appStore((state) => state);
  return (
    <Fragment>
      <Nav />
      <AnimatePresence>
        <DialoguePopOver>
          {dialogueType === "cart" ? (
            <Cart />
          ) : dialogueType === "acc" ? (
            <Account />
          ) : (
            ""
          )}
        </DialoguePopOver>
      </AnimatePresence>

      <main>{children}</main>
    </Fragment>
  );
};

export default index;
