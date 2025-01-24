import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { logout } = useAuth();
  return (
    <nav className="flex flex-col text-pastelRose-50 text-xl min-h-full p-3 items-center">
      <Link
        className="flex justify-center items-center text-xl text-center lg:mt-2 max-w-min"
        to={"/home"}
      >
        Home
      </Link>

      <div className="w-full mt-5 flex justify-center">
        <button
          onClick={logout}
          className="text-center w-1/2 border 1 border-blue-100 rounded-xl hover:bg-green-100 active:text-pink-900 bg-purple-100"
        >
          Log out
        </button>
      </div>
        <Link to={"stuff"} className="">suck</Link>
    </nav>
  );
}

export default Navbar;
