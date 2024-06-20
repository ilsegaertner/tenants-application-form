import React from "react";
import { Link } from "react-router-dom";
import "../../src/App.css";

const HomePage = () => {
  return (
    <>
      <div className="px-72 my-8">
        <h1 className="text-xl font-bold mb-10"> Buena</h1>
        <Link to={"/register"} className="button-filled">
          {" "}
          Find a flat
        </Link>
      </div>
    </>
  );
};

export default HomePage;
