import React from "react";
import Sideber from "../Sideber/Sideber";
import Friends from "../Friends/Friends";
import ChatBox from "../ChatBox/ChatBox";

const Massege = () => {
  return (
    <div className="flex mt-[35px]">
      <Sideber active="massege" />
      <div className="flex">
        <div className="flex flex-col gap-[20px]">
          <Friends />
        </div>
        <div className="ml-[40px]">
          <ChatBox />
        </div>
      </div>
    </div>
  );
};

export default Massege;
