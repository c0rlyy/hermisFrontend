import { useAuth } from "../context/AuthContext";

function Home() {
  const { logout, user } = useAuth();

  console.log(user);
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-blue-300">
        hello welcome home
      </h1>
      <button onClick={logout}>log out </button>
    </>
  );
}

export default Home;
