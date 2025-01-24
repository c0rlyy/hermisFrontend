import Timetable from "../components/Timetable";
import { useAuth } from "../context/AuthContext";
import Loading from "../components/Loader";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
function Home() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1">
          <div className="w-1/6 bg-pastelPinkBg-50 text-white flex flex-col lg:block hidden h-full rounded-tr-3xl shadow-md">
            <Navbar />
          </div>
          <div className="flex-1 m-5 lg:m-10">
            <Timetable />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
