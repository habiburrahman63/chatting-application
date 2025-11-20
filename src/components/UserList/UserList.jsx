import React, { useEffect, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import groupList from "../../assets/groupList.png";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector } from "react-redux";

const UserList = () => {
  const data = useSelector((selector) => selector?.userInfo?.value?.user);

  const db = getDatabase();
  const userRef = ref(db, "users");
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    onValue(userRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        if (data?.uid !== item.key) {
          arr.push({ ...item.val(), userId: item.key });
        }
      });
      setUserList(arr);
    });
  }, []);

  const handleFriendRequest = (item) => {
    console.log("ok", item);
    set(push(ref(db, "FriendRequest/")), {
      senderName: data.displayName,
      senderId: data.uid,
      receiverName: item.username,
      receiverId: item.userId,
    });
  };

  const [friendRequestList, setFriendRequestList] = useState([]);
  useEffect(() => {
    const friendRequestRef = ref(db, "FriendRequest");
    onValue(friendRequestRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val().receiverId + item.val().senderId);
      });
      setFriendRequestList(arr);
    });
  }, []);

  const [friendList, setFriendList] = useState([]);
  useEffect(() => {
    const friendRef = ref(db, "friend/");
    onValue(friendRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val().receiverId + item.val().senderId);
      });
      setFriendList(arr);
      console.log(friendList);
    });
  }, []);

  const [userBlock, setuserBlock] = useState([]);
  useEffect(() => {
    const blockUserRef = ref(db, "FriendBlock/");
    onValue(blockUserRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val().receiverId + item.val().senderId);
      });
      setuserBlock(arr);
    });
  }, []);
  // console.log(userBlock);

  return (
    <div>
      <div className="w-[427px]  bg-[#ffffff] pt-[13px] px-[20px] pb-[21px] rounded-[20px] ml-[43px] shadow-lg">
        <div className="flex justify-between items-center">
          <p className="text-[20px] font-semibold font-primary text-[#000000]">
            User List
          </p>
          <div className="text-[20px]">
            <HiOutlineDotsVertical />
          </div>
        </div>
        <div className=" overflow-y-scroll h-[462px]">
          {userList.map((user) => (
            <div className="flex items-center gap-[51px] border-b-[1px] w-[350px] border-black/25 pb-[13px] mt-[17px] justify-between">
              <div className="flex items-center gap-[14px]">
                <img src={groupList} alt="" />
                <div>
                  <h2 className="text-[18px] font-semibold text-[#000] font-primary">
                    {user.username}
                  </h2>
                  <p className="text-[14px] font-medium font-primary">
                    {user.email}
                  </p>
                </div>
              </div>
              <div>
                {userBlock.includes(data.uid + user.userId) ||
                userBlock.includes(user.userId + data.uid) ? (
                  <button className="text-[20px] font-semibold font-primary px-[15px] rounded-[5px] bg-black text-red-500">
                    Block
                  </button>
                ) : friendList.includes(data.uid + user.userId) ||
                  friendList.includes(user.userId + data.uid) ? (
                  <button className="text-[20px] font-semibold font-primary px-[15px] rounded-[5px] bg-green-500 text-white">
                    Friend
                  </button>
                ) : friendRequestList.includes(data.uid + user.userId) ||
                  friendRequestList.includes(user.userId + data.uid) ? (
                  <button className="text-[20px] font-semibold font-primary px-[22px] rounded-[5px] bg-[#1E1E1E] text-white">
                    -
                  </button>
                ) : (
                  <button
                    onClick={() => handleFriendRequest(user)}
                    className="text-[20px] font-semibold font-primary px-[22px] rounded-[5px] bg-[#1E1E1E] text-white"
                  >
                    +
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
