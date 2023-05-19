import React from "react";
import ColorImage from "../../image/undraw_Creation_process_re_kqa9.png";
import { Wave } from "../../icon/Icon";

const Home = () => {
  return (
    <>
      <div className=" grid px-10 grid-cols-2 bg-white">
        <div className="">
          <h1 className="selection:text-[#00acb4] font-bold text-[50px] pt-36">
            Generate Beautiful CSS Design
          </h1>
          {/* <p className="py-2 indent-8 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            veniam obcaecati facilis odio minima ratione similique hic quae,
            inventore quos. Doloribus nihil, minima reprehenderit adipisci rerum
            magnam debitis totam perferendis.
          </p> */}
        </div>
        <img src={ColorImage} alt="" className=" bg-cover col-span-1" />
      </div>
      <Wave />
    </>
  );
};

export default Home;
