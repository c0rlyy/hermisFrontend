import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/home"
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
