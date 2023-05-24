import React, { useEffect } from "react";
import { Frown } from "react-feather";
import ItemCard from "./ItemCard";

import { UseAppStore } from "../../lib/store";
import { AnimatePresence, motion } from "framer-motion";

const index: React.FC = () => {
  let cartItems = UseAppStore((state) => state.cartItems);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const gst = subtotal * 0.18;

  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: [0, 20, 0] }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.2 }}
      className=" right-0 bg-white border-l-2 border-b-2 border-gray-200 w-full md:w-[60%] fixed right-0 z-50 rounded  drop-shadow-[-15px_15px_12px_rgba(0,0,0,0.25)]"
    >
      {cartItems.length < 1 ? (
        <motion.div
          animate={{ opacity: 1, rotate: [0, -10, 10, 0] }}
          exit={{ rotate: [0, -10, 0], opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="flex gap-2 justify-center py-4"
        >
          Cart is Empty <Frown />
        </motion.div>
      ) : (
        <div className=" max-h-[70vh]">
          <header className="text-center py-2 font-bold text-lg bg-[#488A74] text-[#ffffff] rounded-t-lg">
            Your Cart
          </header>

          <div className="max-h-[50vh] overflow-y-scroll mb-2">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ rotate: [0, -10, 0], opacity: 0, y: 50 }}
                  transition={{ duration: 0.7 }}
                >
                  <ItemCard key={item.id} item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <section className="w-[90%] mx-auto mb-5 text-[#00412B] text-center">
            <div className="flex justify-between font-bold text-gray-500">
              <h4>Sub Total</h4>
              <h4>₹ {subtotal}</h4>
            </div>
            <div className="flex justify-between  text-gray-500">
              <h4>GST 18%</h4>
              <h4>₹ {gst}</h4>
            </div>
            <div className="flex justify-between font-bold ">
              <h4>Grand Total</h4>
              <h4>₹ {subtotal + gst}</h4>
            </div>
            <motion.button
              className="bg-[#00412B] w-[80%] py-1 text-white rounded font-bold"
              whileHover={{ scale: [1, 1.05, 1] }}
              whileTap={{ scale: [1, 0.9, 1] }}
              transition={{ duration: 0.3 }}
            >
              Proceed to Pay
            </motion.button>
          </section>
        </div>
      )}
    </motion.section>
  );
};

export default index;
