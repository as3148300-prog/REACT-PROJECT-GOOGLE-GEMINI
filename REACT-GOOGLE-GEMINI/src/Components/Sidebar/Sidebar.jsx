import React from "react";
import menuIcon from "../../assets/menu-line.png";
import menuIcon2 from "../../assets/add-large-line.png";
import menuIcon3 from "../../assets/question-line.png";

const Sidebar = () => {
  return (
    <div className="h-screen w-[8%] bg-[#F0F4F9] flex flex-col justify-between">
      <div className="h-[25%] w-full  p-[15px]">
        <div className=" h-[100%] w-[100%] flex flex-col items-start justify-between  " >
          <img src={menuIcon} alt="Menu" />
          <div className="flex flex-col gap-[10px]">
             <button className="flex gap-[5px] bg-[#E6EAF1] p-[15px] rounded-full text-1xl flex ">
            <img className="
            h-[90%] w-[20%]" src={menuIcon2} alt="" />
            New Chat
          </button>
          <h4 className="text-1xl">Recent</h4>
          </div>
        </div>
      </div>
      <div className="h-[25%] w-full flex flex-col gap-[3px] pt-[30px]">
      <button className="flex gap-[5px] p-[15px] rounded-full text-1xl " >
        <img  src={menuIcon3} alt="" />
        Help
      </button>
       <button className="flex gap-[5px] p-[15px] rounded-full text-1xl " >
        <img  src={menuIcon3} alt="" />
        Activity
      </button>
       <button className="flex gap-[5px] p-[15px] rounded-full text-1xl " >
        <img  src={menuIcon3} alt="" />
        Settings
      </button>
      </div>
    </div>
  );
};

export default Sidebar;