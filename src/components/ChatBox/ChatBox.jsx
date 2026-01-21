import React, { useEffect, useState } from "react";
import userProfile from "../../assets/userProfile.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiTriangleFill } from "react-icons/pi";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { CiCamera } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { useSelector } from "react-redux";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import moment from "moment/moment";
import EmojiPicker from "emoji-picker-react";
const ChatBox = () => {
  const db = getDatabase();
  const activeData = useSelector((state) => state?.activeChatInfo?.value);
  const data = useSelector((selector) => selector.userInfo.value.user);
  const [msg, setMsg] = useState("");
  const [msgList, setMsgList] = useState([]);
  const [emoji, setEmoji] = useState(false);

  const handleChatBox = () => {
    setMsg("");
    set(
      push(ref(db, "msgeee/")),

      {
        senderId: data.uid,
        senderName: data.displayName,
        receiverId: activeData.id,
        receiverName: activeData.name,
        message: msg,
        date: moment().format(),
      },
    );
  };

  useEffect(() => {
    const messageRef = ref(db, "msgeee/");
    onValue(messageRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        if (
          (data.uid == item.val().senderId &&
            activeData.id == item.val().receiverId) ||
          (data.uid == item.val().receiverId &&
            activeData.id == item.val().senderId)
        )
          arr.push(item.val());
      });
      setMsgList(arr);
    });
  }, [activeData?.id]);

  const handleEmoji = (em) => {
    setMsg(msg + em.emoji);
  };

  return (
    <div>
      <div className="w-[700px] border-black/25 shadow-lg rounded-[20px] py-[24px] px-[51px]">
        <div className="flex items-center justify-between border-b-[1px] border-black/25 pb-[24px]">
          <div className="flex items-center gap-[20px]">
            <div>
              <img src={userProfile} alt="userProfile" />
            </div>
            <div>
              <h2 className="text-[24px] font-semibold text-black font-primary">
                {activeData ? <p>{activeData.name}</p> : <p>Unknown</p>}
              </h2>
              <p className="text-[14px] font-normal text-black/85 font-primary">
                Online
              </p>
            </div>
          </div>
          <div>
            <BsThreeDotsVertical className="text-[30px] font-semibold text-black font-primary] cursor-pointer" />
          </div>
        </div>

        <div className="pt-[57px] pb-[47px] border-b-[1px] border-black/25 overflow-y-scroll h-[600px]">
          {msgList.map((item) =>
            data.uid == item.senderId ? (
              <div className="my-[29px] text-end">
                <div className="relative">
                  <h2 className="py-[13px] px-[52px] bg-black inline-block rounded-[10px]  text-[16px] font-medium text-white font-primary">
                    {item.message}
                  </h2>
                  <p className="text-[12px] font-normal text-black/60 font-primary mt-[5px]">
                    {/* {item.date} */}
                    {moment(item.date).fromNow()}
                  </p>
                  <div className="absolute bottom-[19.5px] right-[-10px]">
                    <PiTriangleFill className="text-[#000000] text-[30px]" />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="relative">
                  <h2 className="py-[13px] px-[52px] bg-[#F1F1F1] inline-block rounded-[10px]  text-[16px] font-medium text-black font-primary">
                    {item?.message}
                  </h2>
                  <p className="text-[12px] font-normal text-black/60 font-primary mt-[5px]">
                    {moment(item.date).fromNow()}
                  </p>
                  <div className="absolute bottom-[18px] left-[-10px]">
                    <PiTriangleFill className="text-[#F1F1F1] text-[30px]" />
                  </div>
                </div>
              </div>
            ),
          )}
        </div>

        <div className="py-[35px] relative">
          <div className="absolute top-[-500px] left-[50%] -translate-x-[50%]">
            {emoji ? (
              <EmojiPicker
                onEmojiClick={(em) => {
                  handleEmoji(em);
                }}
              />
            ) : (
              ""
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="w-[537px] bg-[#F1F1F1] rounded-[10px] flex items-center justify-between px-[15px]">
              <div>
                <input
                  value={msg}
                  onChange={(e) => {
                    setMsg(e.target.value);
                  }}
                  type="text"
                  placeholder="massege"
                  className="w-full py-[15px]  text-[20px] font-primary outline-0"
                />
              </div>
              <div className="flex items-center gap-[13px]">
                <MdOutlineEmojiEmotions
                  onClick={() => {
                    setEmoji(!emoji);
                  }}
                  className="text-[20px] cursor-pointer"
                />
                <CiCamera className="text-[20px]" />
              </div>
            </div>
            <div className="bg-black p-[15px] rounded-[10px] ml-[20px]">
              <IoIosSend
                onClick={handleChatBox}
                className="text-[30px] text-white cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
