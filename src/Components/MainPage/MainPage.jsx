import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Table from "../Tabel/Table";
import Header from "../Header/Header";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className=" grid grid-cols-6   ">
      <div className=" col-span-1  pl-4 pt-4 text-white">
        <Navbar />
      </div>
      <div className="col-span-5 bg-slate-50 bg-[#F5F5F5] p-4 text-white w-full ">
        <div>
          <Header />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
