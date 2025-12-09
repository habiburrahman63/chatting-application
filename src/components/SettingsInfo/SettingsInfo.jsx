import React from "react";
import Sideber from "../Sideber/Sideber";
import SettingsUi from "../Page/SettingsUi";

const SettingsInfo = () => {
  return (
    <div className="flex mt-[35px]">
      <Sideber active="settings" />
      <div className="flex">
        <div className="flex flex-col gap-[20px]">
          <SettingsUi />
        </div>
      </div>
    </div>
  );
};

export default SettingsInfo;
