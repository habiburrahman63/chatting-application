import React, { useEffect, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import groupList from "../../assets/groupList.png";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useSelector } from "react-redux";

const GroupList = () => {
  const data = useSelector((selector) => selector?.userInfo?.value?.user);
  const db = getDatabase();
  const [show, setShow] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupNameErr, setGroupNameErr] = useState("");
  const [groupTagline, setGroupTagline] = useState("");
  const [groupTaglineErr, setGroupTaglineErr] = useState("");

  const handleClick = () => {
    setShow(!show);
  };

  const handleCreateGroup = () => {
    if (!groupName) {
      setGroupNameErr("Group Name please!");
    }
    if (!groupTagline) {
      setGroupTaglineErr("group Tagline please!");
    }
    if (groupName && groupTagline) {
      set(push(ref(db, "groupList/")), {
        groupName: groupName,
        groupTagline: groupTagline,
        groupCreator: data.uid,
      });
      setShow(false);

      setGroupName("");
      setGroupTagline("");
    }
  };
  const [groupList, setgroupList] = useState([]);
  useEffect(() => {
    const groupListRef = ref(db, "groupList/");
    onValue(groupListRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        if (item.val().groupCreator != data.uid) {
          arr.push(item.val());
        }
      });
      setgroupList(arr);
    });
  });

  return (
    <div>
      <div className="w-[427px]  bg-[#ffffff] pt-[13px] px-[20px] pb-[21px] rounded-[20px] ml-[43px] shadow-lg">
        <div className="flex justify-between items-center">
          <p className="text-[20px] font-semibold font-primary text-[#000000]">
            Groups List
          </p>
          <div className="text-[20px]">
            {/* <HiOutlineDotsVertical /> */}
            <div>
              {show ? (
                <button
                  onClick={handleClick}
                  className="bg-primary text-white rounded px-2 py-1"
                >
                  Go Back
                </button>
              ) : (
                <button
                  onClick={handleClick}
                  className="bg-primary text-white rounded px-2 py-1"
                >
                  Create Group
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="overflow-y-scroll h-[462px] scrollbar-hide">
          {show ? (
            <div className="p-[50px] bg-green-500 absolute w-[500px] rounded top-[200px] left-1/2 -translate-x-1/2">
              <div>
                <input
                  onChange={(e) => {
                    setGroupName(e.target.value);
                    setGroupNameErr("");
                  }}
                  type="text"
                  className="py-2 w-full border-2 text-white px-2 rounded-md"
                  placeholder="Group Name"
                />
                <p className="text-[16px] font-medium text-red-500">
                  {groupNameErr}
                </p>
                <input
                  onChange={(e) => {
                    setGroupTagline(e.target.value);
                    setGroupTaglineErr("");
                  }}
                  type="text"
                  className="py-2 w-full border-2 rounded-md mt-5 px-2 text-white"
                  placeholder="Group Tagline"
                />
                <p className="text-[16px] font-medium text-red-500">
                  {groupTaglineErr}
                </p>
                <button
                  onClick={handleCreateGroup}
                  className=" cursor-pointer mt-5 font-semibold text-[20px] bg-primary text-white rounded px-2 py-2 w-full"
                >
                  Create
                </button>
              </div>
            </div>
          ) : (
            <div>
              {groupList.map((item) => (
                <div>
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
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GroupList;
