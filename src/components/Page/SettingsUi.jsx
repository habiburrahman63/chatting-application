import React, { useState } from "react";
import profil from "../../assets/profile.png";
import statusInfo from "../../assets/statusInfo.png";
import { FaPenAlt } from "react-icons/fa";
import { MdAddPhotoAlternate } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, updateProfile } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { userNameUpdate } from "../../Slices/userSlice";

const SettingsUi = () => {
  const auth = getAuth();
  const db = getDatabase();
  const dispatch = useDispatch();
  const [editshow, setEditeShow] = useState(false);
  const data = useSelector((selector) => selector?.userInfo?.value?.user);
  const [showDisplayName, setShowDisplayName] = useState(
    data?.displayName || ""
  );
  const [newName, setNewName] = useState("");

  const handlEditeName = () => {
    setEditeShow(!editshow);
  };
  const handleEditeSubmit = () => {
    console.log(showDisplayName);
    setShowDisplayName("");
    updateProfile(auth.currentUser, {
      displayName: showDisplayName,
      // photoURL: "https://example.com/jane-q-user/profile.jpg",
    });
    set(ref(db, "users/" + data.uid), {
      username: showDisplayName,
      email: data.email,
    }).then(() => {
      dispatch(userNameUpdate(showDisplayName));
    });
  };
  console.log(editshow);
  return (
    <div>
      <div className="w-[427px] mt-[43px]  bg-[#ffffff] pt-[13px] px-[20px] pb-[21px] rounded-[20px] ml-[43px] shadow-lg">
        <h2 className="text-[20px] font-semibold text-black font-primary">
          Profile Settings
        </h2>
        <div className="flex mt-[49px] items-center gap-x-[31px] border-b border-black/25 pb-[29px] ml-[20px]">
          <img src={profil} className="w-[70px]" alt="" />
          <h3 className="text-[25px] font-semibold text-black font-primary">
            {data.displayName}
          </h3>
        </div>
        <div className="mt-[43px] ml-[60px]">
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
            <p className=" w-full mt-[10px]">
              {editshow && (
                <div className="flex items-center gap-[10px]">
                  <input
                    onChange={(e) => {
                      setShowDisplayName(e.target.value);
                    }}
                    value={showDisplayName}
                    type="text"
                    className="w-full py-[8px] px-[15px] outline-none border"
                    placeholder="Edite Name"
                  />
                  <button
                    onClick={handleEditeSubmit}
                    className=" py-[8px] px-[15px] bg-black text-white cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              )}
            </p>
          </div>
          <div className="flex items-center gap-[36px] mt-[37px]">
            <img src={statusInfo} alt="statusInfo" />
            <p className="text-[20px] font-semibold text-black font-primary">
              Edit Profile Status Info.
            </p>
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
