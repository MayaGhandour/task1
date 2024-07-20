import React from "react";
import dashboard from "../../assets/Svgs/dashboard.svg";
import documents from "../../assets/Svgs/documents.svg";
import help from "../../assets/Svgs/help.svg";
import hierarchy from "../../assets/Svgs/hierarchy.svg";
import message from "../../assets/Svgs/message.svg";
import users from "../../assets/Svgs/users.svg";
import photos from "../../assets/Svgs/photos.svg";
import setting from "../../assets/Svgs/setting.svg";

const Navbar = () => {
  return (
    <div className="pl-2 ">
      <h1 className="font-bold text-xl text-[#0A0A0A] leading-8 pt-[1.5vw] pb-8">
        YOURLOGO
      </h1>
      <div className="flex gap-y-8 flex-col w-full ">
        <div className="flex gap-x-4  border-r-4 border-blue-500 w-full">
          <img src={dashboard} alt="" className="w-4 " />
          <p className=" text-[#4A85F6] leading-8 tracking-wide font-semibold text-[0.9rem] ">
            Dashboard
          </p>
        </div>
        <div className="flex gap-x-4">
          <img src={users} alt="" className="w-4 " />
          <p className=" text-[#757575] leading-8 tracking-wide font-normal text-[0.9rem]">
            Users
          </p>
        </div>
        <div className="flex gap-x-4">
          <img src={documents} alt="" className="w-4 " />
          <p className=" text-[#757575] leading-8 tracking-wide font-normal text-[0.9rem]">
            Documents
          </p>
        </div>
        <div className="flex gap-x-4">
          <img src={photos} alt="" className="w-4 " />
          <p className=" text-[#757575] leading-8 tracking-wide font-normal text-[0.9rem]">
            Photos
          </p>
        </div>
        <div className="flex gap-x-4">
          <img src={hierarchy} alt="" className="w-4 " />
          <p className=" text-[#757575] leading-8 tracking-wide font-normal text-[0.9rem]">
            Hierarchy
          </p>
        </div>
        {/* -----------2 ----------- */}
        <div className="flex gap-y-8 flex-col mt-8">
          <div className="flex gap-x-4">
            <img src={message} alt="" className="w-4 " />
            <p className=" text-[#757575] leading-8 tracking-wide font-normal text-[0.9rem]">
              Message
            </p>
          </div>
          <div className="flex gap-x-4">
            <img src={help} alt="" className="w-4 " />
            <p className=" text-[#757575] leading-8 tracking-wide font-normal text-[0.9rem]">
              Help
            </p>
          </div>
          <div className="flex gap-x-4">
            <img src={setting} alt="" className="w-4 " />
            <p className=" text-[#757575] leading-8 tracking-wide font-normal text-[0.9rem]">
              Setting
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
