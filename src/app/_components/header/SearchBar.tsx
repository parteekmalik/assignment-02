import React, { ReactNode } from "react";
import Search from "../svgs/search";

function SearchBar({
  ishide = false,
  children,
  className = "",
}: {
  ishide?: boolean;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={` flex overflow-hidden   md:min-h-[2.5rem] ${className}`}>
      <input
        type="string"
        placeholder="Search here..."
        className={
          " placleholderSize mx-1 border-0  focus:outline-0" +
          (ishide ? " hidden xl:block " : "")
        }
      ></input>
      <div className=" flex items-center justify-center bg-white p-[0.5rem] text-mainPurple  hover:cursor-pointer lg:p-[0.75rem] xl:bg-mainPurple xl:text-white">
        <span>{children}</span>
      </div>
    </div>
  );
}

export default SearchBar;
