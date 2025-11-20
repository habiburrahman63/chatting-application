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

const Friends = () => {
  const [friendList, setFriendList] = useState([]);
  const data = useSelector((selector) => selector.userInfo.value.user);
  const db = getDatabase();
  useEffect(() => {
    const friendRef = ref(db, "friend/");
    onValue(friendRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        if (
          data.uid == item.val().receiverId ||
          data.uid == item.val().senderId
        ) {
          arr.push({ ...item.val(), userId: item.key });
          // arr.push(item.val());
        }
      });
      setFriendList(arr);
      console.log(friendList);
    });
  }, []);

  const handleFriend = (item) => {
    console.log("ok cool");
    set(push(ref(db, "FriendBlock/")), {
      ...item,

      // receiverName: item.receiverName,
      // receiverId: item.receiverId,
      // senderName: item.senderName,
      // senderId: item.senderId,
    }).then(() => {
      remove(ref(db, "friend/" + item.userId));
    });
  };

  return (
    <div>
      <div className="w-[427px]  bg-[#ffffff] pt-[13px] px-[20px] pb-[21px] rounded-[20px] ml-[43px] shadow-lg">
        <div className="flex justify-between items-center">
          <p className="text-[20px] font-semibold font-primary text-[#000000]">
            Friends
          </p>
          <div className="text-[20px]">
            <HiOutlineDotsVertical />
          </div>
        </div>
        <div className="overflow-y-scroll h-[462px] scrollbar-hide">
          {friendList.map((item) => (
            <div className="flex items-center w-[350px] gap-[51px] justify-between border-b-[1px] border-black/25 pb-[13px] mt-[17px]">
              <div className="flex items-center gap-[14px]">
                <img src={groupList} alt="" />
                <div>
                  <h2 className="text-[18px] font-semibold text-[#000] font-primary">
                    {data.uid == item.receiverId
                      ? item.senderName
                      : item.receiverName}
                  </h2>
                  <p className="text-[14px] font-medium font-primary">
                    Hi Guys, Wassup!
                  </p>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleFriend(item)}
                  className="text-[20px] font-semibold font-primary px-[22px] rounded-[5px] bg-[#1E1E1E] text-white"
                >
                  Block
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friends;
