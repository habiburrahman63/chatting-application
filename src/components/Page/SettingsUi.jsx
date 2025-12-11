import React, { useState } from "react";
import profil from "../../assets/profile.png";
import statusInfo from "../../assets/statusInfo.png";
import { FaPenAlt } from "react-icons/fa";
import { MdAddPhotoAlternate } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, updateProfile } from "firebase/auth";
import { getDatabase, ref, set, update } from "firebase/database";
import { userNameUpdate } from "../../Slices/userSlice";

const SettingsUi = () => {
  const auth = getAuth();
  const db = getDatabase();
  const dispatch = useDispatch();
  const [editshow, setEditeShow] = useState(false);
  const data = useSelector((selector) => selector?.userInfo?.value?.user);

  const [editStatusShow, setEditStatusShow] = useState(false);
  const [status, setStatus] = useState("Stay home stay safe");
  const [newStatus, setNewStatus] = useState("");
  const [showDisplayName, setShowDisplayName] = useState(
    data?.displayName || ""
  );

  // --- Name Edit Functions ---
  const handlEditeName = () => {
    setEditeShow(!editshow);
  };

  const handleEditeSubmit = () => {
    console.log(showDisplayName);
    updateProfile(auth.currentUser, {
      displayName: showDisplayName,
    });

    update(ref(db, "users/" + data.uid), {
      username: showDisplayName,
    }).then(() => {
      dispatch(userNameUpdate(showDisplayName));
      setEditeShow(false);
    });
  };

  // --- Status Edit Functions ---
  const handleStatusShow = () => {
    setEditStatusShow(!editStatusShow);
    setNewStatus(status);
  };

  const handleStatusSubmit = () => {
    update(ref(db, "users/" + data.uid), {
      status: newStatus,
    }).then(() => {
      setStatus(newStatus);
      setEditStatusShow(false);
      console.log("Status Updated");
    });
  };

  return (
    <div>
      <div className="w-[427px] mt-[43px] bg-[#ffffff] pt-[13px] px-[20px] pb-[21px] rounded-[20px] ml-[43px] shadow-lg">
        <h2 className="text-[20px] font-semibold text-black font-primary">
          Profile Settings
        </h2>
        <div className="flex mt-[49px] items-center gap-x-[31px] border-b border-black/25 pb-[29px] ml-[20px]">
          <img src={profil} className="w-[70px]" alt="" />
          <div>
            <h3 className="text-[25px] font-semibold text-black font-primary">
              {data.displayName}
            </h3>
            <p className="text-[16px] font-normal text-black font-primary">
              {status}
            </p>
          </div>
        </div>

        <div className="mt-[43px] ml-[60px]">
          {/* Name Edit Section */}
          <div>
            <div className="flex items-center gap-[36px] mt-[37px]">
              <FaPenAlt className="text-[27px]" />
              <p
                className="text-[20px] font-semibold text-black font-primary cursor-pointer"
                onClick={handlEditeName}
              >
                Edit Profile Name.
              </p>
            </div>
            <div className="w-full mt-[10px]">
              {editshow && (
                <div className="flex items-center gap-[10px]">
                  <input
                    onChange={(e) => setShowDisplayName(e.target.value)}
                    value={showDisplayName}
                    type="text"
                    className="w-full py-[8px] px-[15px] outline-none border"
                    placeholder="Edit Name"
                  />
                  <button
                    onClick={handleEditeSubmit}
                    className="py-[8px] px-[15px] bg-black text-white cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Status Edit Section */}
          <div>
            <div className="flex items-center gap-[36px] mt-[37px]">
              <img src={statusInfo} alt="statusInfo" />
              <p
                className="text-[20px] font-semibold text-black font-primary cursor-pointer"
                onClick={handleStatusShow}
              >
                Edit Profile Status Info.
              </p>
            </div>
            <div className="w-full mt-[10px]">
              {editStatusShow && (
                <div className="flex items-center gap-[10px]">
                  <input
                    onChange={(e) => setNewStatus(e.target.value)}
                    value={newStatus}
                    type="text"
                    className="w-full py-[8px] px-[15px] outline-none border"
                    placeholder="Update Status"
                  />
                  <button
                    onClick={handleStatusSubmit}
                    className="py-[8px] px-[15px] bg-black text-white cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-[36px] mt-[37px]">
            <MdAddPhotoAlternate className="text-[27px]" />
            <p className="text-[20px] font-semibold text-black font-primary">
              Edit Profile Photo.
            </p>
          </div>
          <div className="flex items-center gap-[36px] mt-[37px]">
            <IoMdHelpCircleOutline className="text-[27px]" />
            <p className="text-[20px] font-semibold text-black font-primary">
              Help.
            </p>
          </div>
        </div>
        <div className="pt-[100px]">
          <p className="text-[20px] font-normal text-black font-primary text-center pb-[38px]">
            Chat App
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingsUi;
