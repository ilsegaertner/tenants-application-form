import React from "react";
import { Link } from "react-router-dom";
import "../../src/App.css";
import { Button } from "../components/ui/button";

const HomePage = () => {
  return (
    <>
      <div className="px-72 nomy-8 buena-wrapper flex bg-red-400">
        <h1 className="noscroll-m-20 notext-4xl nofont-extrabold notracking-tight nolg:text-5xl buena">
          {" "}
          Buena
        </h1>
        <Link to={"/register"} className="button-filled">
          {" "}
          <Button>Find a flat</Button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
