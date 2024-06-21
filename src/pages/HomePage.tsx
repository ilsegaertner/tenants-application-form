import React from "react";
import { Link } from "react-router-dom";
import "../../src/App.css";
import { Button } from "../components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

const HomePage = () => {
  return (
    <>
      <div className="outer-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            className="container-wrapper"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.003 }}
          >
            <div className="noflex noflex-col sm:noflex-row nogap-10 nojustify-between noitems-center">
              <h1 className="link-underline-animation buena">Buena</h1>

              <div className="">
                <h2 className=" notext-white">
                  <Link to={"/register"}>
                    {" "}
                    <Button>Find a flat</Button>
                  </Link>
                </h2>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default HomePage;
