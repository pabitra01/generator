import React from "react";

const Search = () => {
  return (
    <div className=" px-10">
      <input
        className="hidden sm:flex focus:ring-0 focus:outline-none text-lg    text-black placeholder-[#00ADB5] w-[100%] h-[50px] rounded-full px-10 "
        type="text"
        aria-label="Search"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
