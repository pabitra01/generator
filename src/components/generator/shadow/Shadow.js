import React from "react";

const Shadow = () => {
  const shadow = [
    { shadow: "shadow" },
    { shadow: "shadow-md" },
    { shadow: "shadow-lg" },
    { shadow: "shadow-xl" },
    { shadow: "shadow-2xl" },
  ];
  return (
    <div className=" grid grid-cols-5 gap-10 py-10 px-10 ">
      {shadow.map((user) => (
        <div
          className={`aspect-square  text-center select-all flex justify-center items-center rounded-lg ${user.shadow}`}
          style={{ boxShadow: `${user.shadow}` }}
        >
          {user.shadow}{" "}
        </div>
      ))}
    </div>
  );
};

export default Shadow;
