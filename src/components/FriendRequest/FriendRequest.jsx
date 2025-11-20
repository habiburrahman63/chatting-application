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

const FriendRequest = () => {
  const data = useSelector((selector) => selector.userInfo.value.user);
  const db = getDatabase();
  const [friendRequest, setFriendRequest] = useState([]);
  useEffect(() => {
    const friendRequestRef = ref(db, "FriendRequest/");
    onValue(friendRequestRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        if (data.uid == item.val().receiverId) {
          arr.push({ ...item.val(), userId: item.key });
        }
      });
      setFriendRequest(arr);
    });
  }, []);

  const handleFriend = (item) => {
    set(push(ref(db, "friend")), {
      ...item,
      // receiverName: item.receiverName,
      // receiverId: item.receiverId,
      // senderName: item.senderName,
      // senderId: item.senderId,
    }).then(() => {
      remove(ref(db, "FriendRequest/" + item.userId));
    });
    console.log(item);
  };
  return (
    <div>
      <div className="w-[427px] mt-[43px]  bg-[#ffffff] pt-[13px] px-[20px] pb-[21px] rounded-[20px] ml-[43px] shadow-lg">
        <div className="flex justify-between items-center">
          <p className="text-[20px] font-semibold font-primary text-[#000000]">
            Friend Request
          </p>
          <div className="text-[20px]">
            <HiOutlineDotsVertical />
          </div>
        </div>
        <div className="overflow-y-scroll h-[462px] scrollbar-hide">
          {friendRequest.map((item) => (
            <div className="flex items-center gap-[51px] border-b-[1px] border-black/25 pb-[13px] mt-[17px]">
              <div className="flex items-center gap-[14px]">
                <img src={groupList} alt="" />
                <div>
                  <h2 className="text-[18px] font-semibold text-[#000] font-primary">
                    {item.senderName}
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
                  Accept
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendRequest;
