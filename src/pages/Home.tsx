import Timetable from "../components/Timetable";
import { useAuth } from "../context/AuthContext";
import Loading from "../components/Loader";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
function Home() {
  const { isLoggedIn } = useAuth();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoggedIn) setIsLoaded(true);
  });

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1">
          <div className="w-1/6 bg-pastelPeach-50 text-white flex flex-col lg:block hidden h-full">
            <Navbar />
          </div>
          <div className="flex-1 m-10">
              <Timetable />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
