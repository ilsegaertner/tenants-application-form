import React from "react";
import { Link } from "react-router-dom";
import "../../src/App.css";

const HomePage = () => {
  return (
    <>
      <div className="px-72 my-8 buena-wrapper">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl buena">
          {" "}
          Buena
        </h1>
        <Link to={"/register"} className="button-filled">
          {" "}
          Find a flat
        </Link>
      </div>
    </>
  );
};

export default HomePage;
