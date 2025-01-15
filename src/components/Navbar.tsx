import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { logout } = useAuth();
  return (
    <nav className="flex flex-col   text-pastelRose-50 text-xl min-h-full">
      <Link
        className="min-w-full flex justify-center items-center text-xl text-center lg:mt-2"
        to={"/home"}
      >
        Home
      </Link>

      <div className="  w-fuil mt-4 flex justify-center">
        <button
          onClick={logout}
          className="text-center w-1/2 border 1 border-blue-100 rounded-xl hover:bg-green-100 active:text-pink-900 bg-purple-100"
        >
          Log out
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
