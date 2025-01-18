import React from "react";
import { Link } from "react-router-dom";
import Stat from "../components/Stat";

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
 <div className="px-[200px]">

  <img src="https://s3-alpha-sig.figma.com/img/1815/795e/fa9deeaaefa4c8cfe0bcc6adb49f7666?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Em0gLtHFtSvogH6gr3n46-MrGwiSisX68wWl0Mrx7oinArWvpybudJ9LvzEgDjL1rW6X7Xh0H9a2F9ScMKrRjDfdrC~Hl0lCk8neqAryVkpEy~gkjNiWwuw~HPM14v~yluloZd~61JgRxhk10CzJ6fFqSYsscwpHgyNFtPp3dQnSldexYjn2Dg0pzJESSOqK9fzl4Z2gbYA6jcwnQtXushmc5z838MvozKaqj5G3kuswMtV-zpxVk2WXPJs6Ipp2F-Pj2uu65bf2kpaYnEG~fgoG68Q9o4hLAMCaGzcteX6JRc7qUERekjKvKmpSZnOn7NK2nHthUEle~iqvWwLr6Q__" alt="" />

  
 </div>
 <Stat/>
 
  
  





</div>


</>

  );
};

export default Home;
