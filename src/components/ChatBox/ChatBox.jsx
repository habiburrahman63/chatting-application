import React from "react";
import userProfile from "../../assets/userProfile.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiTriangleFill } from "react-icons/pi";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { CiCamera } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";

const ChatBox = () => {
  return (
    <div>
      <div className="w-[700px] border-black/25 shadow-lg rounded-[20px] py-[24px] px-[51px]">
        <div className="flex items-center justify-between border-b-[1px] border-black/25 pb-[24px]">
          <div className="flex items-center gap-[20px]">
            <div>
              <img src={userProfile} alt="userProfile" />
            </div>
            <div>
              <h2 className="text-[24px] font-semibold text-black font-primary">
                Swathi
              </h2>
              <p className="text-[14px] font-normal text-black/85 font-primary">
                Online
              </p>
            </div>
          </div>
          <div>
            <BsThreeDotsVertical className="text-[30px] font-semibold text-black font-primary] cursor-pointer" />
          </div>
        </div>

        <div className="pt-[57px] pb-[47px] border-b-[1px] border-black/25">
          <div>
            <div className="relative">
              <h2 className="py-[13px] px-[52px] bg-[#F1F1F1] inline-block rounded-[10px]  text-[16px] font-medium text-black font-primary">
                Hey There !
              </h2>
              <p className="text-[12px] font-normal text-black/25 font-primary mt-[5px]">
                Today, 2:01pm
              </p>
              <div className="absolute bottom-[18px] left-[-10px]">
                <PiTriangleFill className="text-[#F1F1F1] text-[30px]" />
              </div>
            </div>
          </div>

          <div className="my-[29px]">
            <div className="relative">
              <h2 className="py-[13px] px-[52px] bg-[#F1F1F1] inline-block rounded-[10px]  text-[16px] font-medium text-black font-primary">
                How are you doing?
              </h2>
              <p className="text-[12px] font-normal text-black/25 font-primary mt-[5px]">
                Today, 2:01pm
              </p>
              <div className="absolute bottom-[18px] left-[-10px]">
                <PiTriangleFill className="text-[#F1F1F1] text-[30px]" />
              </div>
            </div>
          </div>

          <div className="my-[29px] text-end">
            <div className="relative">
              <h2 className="py-[13px] px-[52px] bg-black inline-block rounded-[10px]  text-[16px] font-medium text-white font-primary">
                Hello...
              </h2>
              <p className="text-[12px] font-normal text-black/25 font-primary mt-[5px]">
                Today, 2:01pm
              </p>
              <div className="absolute bottom-[19.5px] right-[-10px]">
                <PiTriangleFill className="text-[#000000] text-[30px]" />
              </div>
            </div>
          </div>

          <div className="my-[29px] text-end">
            <div className="relative">
              <h2 className="py-[13px] px-[52px] bg-black inline-block rounded-[10px]  text-[16px] font-medium text-white font-primary">
                I am good and hoew about you?
              </h2>
              <p className="text-[12px] font-normal text-black/25 font-primary mt-[5px]">
                Today, 2:01pm
              </p>
              <div className="absolute bottom-[19.5px] right-[-10px]">
                <PiTriangleFill className="text-[#000000] text-[30px]" />
              </div>
            </div>
          </div>

          <div className="my-[29px]">
            <div className="relative">
              <h2 className="py-[13px] px-[52px] bg-[#F1F1F1] inline-block rounded-[10px]  text-[16px] font-medium text-black font-primary">
                I am doing well. Can we meet up tomorrow?
              </h2>
              <p className="text-[12px] font-normal text-black/25 font-primary mt-[5px]">
                Today, 2:01pm
              </p>
              <div className="absolute bottom-[18px] left-[-10px]">
                <PiTriangleFill className="text-[#F1F1F1] text-[30px]" />
              </div>
            </div>
          </div>

          <div className="my-[29px] text-end">
            <div className="relative">
              <h2 className="py-[13px] px-[52px] bg-black inline-block rounded-[10px]  text-[16px] font-medium text-white font-primary">
                Sure!
              </h2>
              <p className="text-[12px] font-normal text-black/25 font-primary mt-[5px]">
                Today, 2:01pm
              </p>
              <div className="absolute bottom-[19.5px] right-[-10px]">
                <PiTriangleFill className="text-[#000000] text-[30px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="py-[35px]">
          <div className="flex items-center justify-between">
            <div className="w-[537px] bg-[#F1F1F1] rounded-[10px] flex items-center justify-between px-[15px]">
              <div>
                <input
                  type="text"
                  placeholder="massege"
                  className="w-full py-[15px]  text-[20px] font-primary outline-0"
                />
              </div>
              <div className="flex items-center gap-[13px]">
                <MdOutlineEmojiEmotions className="text-[20px]" />
                <CiCamera className="text-[20px]" />
              </div>
            </div>
            <div className="bg-black p-[15px] rounded-[10px] ml-[20px]">
              <IoIosSend className="text-[30px] text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
