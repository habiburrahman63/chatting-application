import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import Sideber from "../Sideber/Sideber";
import GroupList from "../GroupList/GroupList";
import Friends from "../Friends/Friends";
import UserList from "../UserList/UserList";
import FriendRequest from "../FriendRequest/FriendRequest";
import MyGroups from "../MyGroups/MyGroups";
import BlockedUsers from "../BlockedUsers/BlockedUsers";
const Home = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const data = useSelector((state) => state.userInfo.value);
  console.log(data);
  const [verify, setVerify] = useState(false);
  const [loading, setLodadin] = useState(true);

  useEffect(() => {
    if (!data) {
      navigate("/login");
    }
  }, []);

  onAuthStateChanged(auth, (user) => {
    if (user.emailVerified) {
      setVerify(true);
    }
    setLodadin(false);
  });

  //   useEffect(() => {
  //     if (data.emailVerified) {
  //       setVerify(true);
  //     }
  //   }, []);

  if (loading) {
    return null;
  }

  return (
    <div>
      {verify ? (
        <div className="flex mt-[35px]">
          <Sideber />
          <div className="flex">
            <div className="flex flex-col gap-[20px]">
              <GroupList />
              <FriendRequest />
            </div>
            <div className="flex flex-col gap-[20px]">
              <Friends />
              <MyGroups />
            </div>
            <div className="flex flex-col gap-[20px]">
              <UserList />
              <BlockedUsers />
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-black font-primary text-[30px] h-screen w-full text-center flex flex-col items-center justify-center">
          <p className="text-white text-[60px] font-bold">
            Place Verifyed your Email
          </p>
          <Link
            to="/login"
            className="text-black  mt-[40px] bg-white py-[8px] px-[20px] text-[30px] font-bold rounded"
          >
            Go back to Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
