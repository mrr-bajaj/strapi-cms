import React from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="flex w-full items-center">
      <div className="">
        <img className="w-20 h-20 mx-10 my-2" src={LOGO_URL} alt="logo"></img>
      </div>
      <ul className="flex mx-auto text-2xl font">
        <li className="m-2 p-2">The School</li>
        <li className="m-2 p-2">Academics</li>
        <li className="m-2 p-2">Life @DBTR</li>
        <li className="m-2 p-2">Contact us</li>
      </ul>
      <div className="mr-10">
        <button className="border rounded px-10 py-1 text-red-400 border-red-400">
          CSR
        </button>
        <button className="border rounded m-2 px-6 py-1 bg-red-600 text-white border-red-400">
          Donate
        </button>
      </div>
    </div>
  );
};

export default Header;
