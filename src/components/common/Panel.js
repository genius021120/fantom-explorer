import React from "react";
import { Link } from "react-router-dom";

const Panel = props => {
  return (
    <div
      className={`relative mb-2 bg-white text-black dark:text-gray-300 dark:bg-[#2c2e3f] border-solid border-grey-light dark:border-blue-right shadow-xl `}
    >
      <div className="flex flex-row items-center justify-between bg-grey-lighter text-xl px-2 py-3 border-solid border-grey-light  dark:border-blue-right  border-b">
        <div className="flex">
          {props.title}
        </div>
        {props.btnLabel &&
          <Link
            className="flex-none bg-transparent hover:bg-blue-100 dark:hover:bg-gray-700 text-center text-blue-700 dark:text-gray-300 font-semibold p-2 border border-blue-500 dark:border-gray-500 rounded text-sm"
            to={props.to}
          >
            {props.btnLabel}
          </Link>}
      </div>

      <div
        className={`p-3  overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200  overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full ${props.classes
          ? props.classes
          : ""}`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Panel;
