import React, { useState } from "react";
import "../MainPage/MainPage.css";
import { IoNotifications } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

import filter from "../../assets/Svgs/filter.svg";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import AddUser from "../AddUser/AddUser";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(!showModal);
  return (
    <>
      <div className="bg-[#F5F5F5] w-[100%] py-4 ">
        <div className="flex justify-between w-full ">
          <div>
            {" "}
            <p className="text-[#0A0A0A]  font-bold text-[20px]">
              Hello, Lekan
            </p>
            <p className="text-[#757575]  font-normal text-[13px]">
              Have a nice day
            </p>
          </div>
          <div>
            <div className="flex justify-center  ">
              <div className="flex items-center pr-4 relative">
                <IoNotifications color="#0A0A0A" size={25} />
                <div className="w-[12px] h-[12px] absolute translate-x-[12px] translate-y-[-5px] bg-white rounded-full flex items-center justify-center">
                  <div className="w-[8px] h-[8px] bg-[#4A85F6] rounded-full"></div>
                </div>
              </div>

              <div className="flex justify-center items-center border-l-2 border-[#BFBFBF] gap-3 pl-4">
                <div className="w-11 h-11 rounded-full bg-[#BFBFBF]"></div>
                <div>
                  {" "}
                  <p className="text-[#0A0A0A] text-[1rem] font-semibold">
                    Lekan Okeowo
                  </p>
                  <p className="text-[#0A0A0A] text-[12px] font-normal">
                    Admin
                  </p>
                </div>
                <IoIosArrowDown color="#404040" />
              </div>
            </div>
          </div>
        </div>{" "}
        <p className="text-[#4A85F6] text-[2rem] font-bold pb-4 pt-2">
          Users Dashboard
        </p>
        <div className="flex justify-between w-[100%]">
          <div className="flex  justify-between items-center">
            <input
              type="text"
              className="w-[600px] px-10 py-2  pr-10  text-black border-white rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
            />
            <div className="absolute  flex items-center px-3">
              <IoSearch color="#404040" />
            </div>
          </div>
          <div>
            {" "}
            <button
              type="submit"
              className=" flex justify-center items-center gap-1  w-[130px] px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={handleOpen}
            >
              Add User <FiPlus size={18} />
            </button>
          </div>
          <div className="flex items-center justify-center gap-2">
            <p className="text-[#404040] text-[1.1rem] font-semibold">
              sout by{" "}
            </p>
            <IoIosArrowDown color="#404040" />
          </div>
          <div className="flex justify-center items-center gap-2">
            <p className="text-[#404040] text-[1.1rem] font-semibold">
              Saved search{" "}
            </p>
            <IoIosArrowDown color="#404040" />
            <img src={filter} alt="filter" className="w-4 h-4 ml-2" />
          </div>
        </div>
      </div>
      <Dialog
        open={showModal}
        handler={handleOpen}
        className="dialog h-[70vh] overflow-y-auto"
      >
        <DialogHeader>
          <p className="text-black">Add User</p>
          <button onClick={handleOpen} className="absolute top-0 right-0 p-3 ">
            <IoClose color="#000" />
          </button>
        </DialogHeader>
        <DialogBody className="shadow-none">
          <AddUser />
        </DialogBody>
      </Dialog>
    </>
  );
};

export default Header;
