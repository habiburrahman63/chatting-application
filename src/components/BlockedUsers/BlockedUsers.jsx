import React, { useEffect, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import groupList from "../../assets/groupList.png";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import { useSelector } from "react-redux";

const BlockedUsers = () => {
  const data = useSelector((selector) => selector.userInfo.value.user);
  const db = getDatabase();
  const [userBlock, setuserBlock] = useState([]);

  useEffect(() => {
    const blockUserRef = ref(db, "FriendBlock/");
    onValue(blockUserRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        if (item.val().blockedBy == data.uid) {
          arr.push({
            id: item.key,
            ...item.val(),
          });
        }
      });
      setuserBlock(arr);
    });
  }, []);

  const handleUnblock = (item) => {
    set(push(ref(db, "friend/")), {
      senderName: item.senderName,
      senderId: item.senderId,
      receiverName: item.receiverName,
      receiverId: item.receiverId,
    }).then(() => {
      remove(ref(db, "FriendBlock/" + item.id));
    });
  };

  return (
    <div>
      <div className="w-[427px] mt-[43px] bg-[#ffffff] pt-[13px] px-[20px] pb-[21px] rounded-[20px] ml-[43px] shadow-lg">
        <div className="flex justify-between items-center">
          <p className="text-[20px] font-semibold font-primary text-[#000000]">
            Blocked Users
          </p>
          <div className="text-[20px]">
            <HiOutlineDotsVertical />
          </div>
        </div>

        <div className="overflow-y-scroll h-[462px] scrollbar-hide">
          {userBlock.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-[51px] justify-between border-b-[1px] border-black/25 pb-[13px] mt-[17px]"
            >
              <div className="flex items-center gap-[14px]">
                <img src={groupList} alt="" />
                <div>
                  <h2 className="text-[18px] font-semibold text-[#000] font-primary">
                    {item.blockedBy == item.senderId
                      ? item.receiverName
                      : item.senderName}
                  </h2>
                  <p className="text-[14px] font-medium font-primary">
                    Hi Guys, Wassup!
                  </p>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleUnblock(item)}
                  className="text-[20px] font-semibold font-primary px-[22px] rounded-[5px] bg-[#1E1E1E] text-white"
                >
                  Unblock
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockedUsers;
