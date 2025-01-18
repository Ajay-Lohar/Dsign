import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return(
<>
<div className="w-full">

  <div>
    <h2 className="text-5xl   font-bold text-center pt-[20vh]">Solve Problem With An <br /> Integrated Agency</h2>
    <p className=" text-center p-[20px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita <br /> adipisci error illo commodi, corporis natus voluptatem ipsam voluptatibus possimus?</p>
    
  </div>
  <div className="flex gap-8 text-[white]  items-center justify-center p-5">
        <Link to="/"  className=" bg-[#0075FF]  hover:bg-[#97c8ff] px-12 py-4 rounded-bl-full rounded-r-full font-semibold">See our portfolio</Link>
        <Link
          to="/"
          className=" bg-[white]  text-[#0075FF] bg-[#97c8ff] px-12 py-4 rounded-bl-full  border-[3px]  rounded-r-full font-semibold" 
        >
          More Info
        </Link>
      </div>
  
  





</div>


</>

  );
};

export default Home;
