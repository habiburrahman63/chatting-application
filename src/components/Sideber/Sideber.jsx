import React from "react";
import profile from "../../assets/profile.png";
import { IoMdHome } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { MdOutlineSettings } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "../../Slices/userSlice";

const Sideber = () => {
  const data = useSelector((selector) => selector?.userInfo?.value);
  console.log(data, "sidber");
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSginOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        localStorage.removeItem("userInfo");
        dispatch(userInfo(null));
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="w-[186px] bg-[#1E1E1E] h-screen text-white ml-[35px] rounded-[20px] relative">
      <div className="flex justify-center pt-[38px]">
        <img src={profile} alt="profile" />
      </div>
      <div className="flex justify-center pt-[20px] text-[20px] font-bold text-center">
        <p>{data?.displayName || data?.user.displayName}</p>
      </div>
      <div
        className="relative flex justify-center pt-[20px] pb-[25px] text-center text-[47px]  rounded-tl-[20px] rounded-bl-[20px]
  bg-white mt-[78px] ml-[25px] pr-[69px] pl-[45px] after:absolute after:content-[''] after:top-0 after:right-0 after:w-[8px] after:h-full after:bg-[#1E1E1E] after:shadow-cyan-500/50 after:rounded-tl-[8px] after:rounded-bl-[8px]"
      >
        <IoMdHome className="bg-white text-black " />
      </div>
      <div className="text-[46px] text-[#C3C3C3] flex justify-center mt-[57px]">
        <AiFillMessage />
      </div>
      <div className="text-[46px] text-[#C3C3C3] flex justify-center mt-[57px]">
        <MdOutlineSettings />
      </div>
      <div className="text-[46px] text-[#C3C3C3] flex justify-center absolute left-[50%] translate-[-50%] bottom-[100px]">
        <ImExit onClick={handleSginOut} />
      </div>
    </div>
  );
};

export default Sideber;
