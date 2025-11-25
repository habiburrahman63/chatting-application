import React, { useEffect, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import groupList from "../../assets/groupList.png";
import { getDatabase, onValue, ref } from "firebase/database";
import { useSelector } from "react-redux";

const MyGroups = () => {
  const db = getDatabase();
  const data = useSelector((selector) => selector?.userInfo?.value?.user);
  const [mygroup, setMygroup] = useState([]);
  useEffect(() => {
    const myGroupRef = ref(db, "groupList/");
    onValue(myGroupRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        if (item.val().groupCreator == data.uid) {
          arr.push(item.val());
        }
      });
      setMygroup(arr);
    });
  });
  return (
    <div>
      <div className="w-[427px] mt-[43px]  bg-[#ffffff] pt-[13px] px-[20px] pb-[21px] rounded-[20px] ml-[43px] shadow-lg">
        <div className="flex justify-between items-center">
          <p className="text-[20px] font-semibold font-primary text-[#000000]">
            My Groups
          </p>
          <div className="text-[20px]">
            <HiOutlineDotsVertical />
          </div>
        </div>
        <div className="overflow-y-scroll h-[462px] scrollbar-hide">
          {mygroup.map((item) => (
            <div className="w-[350px] justify-between flex items-center gap-[51px] border-b-[1px] border-black/25 pb-[13px] mt-[17px]">
              <div className="flex items-center gap-[14px]">
                <img src={groupList} alt="" />
                <div>
                  <h2 className="text-[18px] font-semibold text-[#000] font-primary">
                    {item.groupName}
                  </h2>
                  <p className="text-[14px] font-medium font-primary">
                    {item.groupTagline}
                  </p>
                </div>
              </div>
              <div>
                <button className="text-[20px] font-semibold font-primary px-[22px] rounded-[5px] bg-[#1E1E1E] text-white">
                  Join
                </button>
              </div>
            </div>
          ))}

          {/* <div className="flex items-center gap-[51px] border-b-[1px] border-black/25 pb-[13px] mt-[17px]">
            <div className="flex items-center gap-[14px]">
              <img src={groupList} alt="" />
              <div>
                <h2 className="text-[18px] font-semibold text-[#000] font-primary">
                  Friends Reunion
                </h2>
                <p className="text-[14px] font-medium font-primary">
                  Hi Guys, Wassup!
                </p>
              </div>
            </div>
            <div>
              <button className="text-[20px] font-semibold font-primary px-[22px] rounded-[5px] bg-[#1E1E1E] text-white">
                Join
              </button>
            </div>
          </div>
          <div className="flex items-center gap-[51px] border-b-[1px] border-black/25 pb-[13px] mt-[17px]">
            <div className="flex items-center gap-[14px]">
              <img src={groupList} alt="" />
              <div>
                <h2 className="text-[18px] font-semibold text-[#000] font-primary">
                  Friends Reunion
                </h2>
                <p className="text-[14px] font-medium font-primary">
                  Hi Guys, Wassup!
                </p>
              </div>
            </div>
            <div>
              <button className="text-[20px] font-semibold font-primary px-[22px] rounded-[5px] bg-[#1E1E1E] text-white">
                Join
              </button>
            </div>
          </div>
          <div className="flex items-center gap-[51px] border-b-[1px] border-black/25 pb-[13px] mt-[17px]">
            <div className="flex items-center gap-[14px]">
              <img src={groupList} alt="" />
              <div>
                <h2 className="text-[18px] font-semibold text-[#000] font-primary">
                  Friends Reunion
                </h2>
                <p className="text-[14px] font-medium font-primary">
                  Hi Guys, Wassup!
                </p>
              </div>
            </div>
            <div>
              <button className="text-[20px] font-semibold font-primary px-[22px] rounded-[5px] bg-[#1E1E1E] text-white">
                Join
              </button>
            </div>
          </div>
          <div className="flex items-center gap-[51px] border-b-[1px] border-black/25 pb-[13px] mt-[17px]">
            <div className="flex items-center gap-[14px]">
              <img src={groupList} alt="" />
              <div>
                <h2 className="text-[18px] font-semibold text-[#000] font-primary">
                  Friends Reunion
                </h2>
                <p className="text-[14px] font-medium font-primary">
                  Hi Guys, Wassup!
                </p>
              </div>
            </div>
            <div>
              <button className="text-[20px] font-semibold font-primary px-[22px] rounded-[5px] bg-[#1E1E1E] text-white">
                Join
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MyGroups;
