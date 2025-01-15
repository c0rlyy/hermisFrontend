import HamburgerMenu from "./HamburgerMenu";
function Header() {
  return (
    <header className="flex flex-col bg-pink-300  p-1 lg:p-4 text-purple-950 shadow-md text-center sticky top-0 ">
      <div className="grid grid-cols-5 lg:flex justify-center">
        <div className="sm:block md:block lg:hidden justify-self-start flex">
          <HamburgerMenu />
        </div>

        <div className="text-3xl font-bold col-span-3 self-center">
          <p className="text-3xl sm:text-4xl lg:text-5xl min-h-full">Hermis</p>
        </div>
      </div>

      <p className="text-lg text-center justify-self-center">
        A fast and <span className="text-blue-900 font-bold">reliable</span>{" "}
        timetable for Varsovia students
      </p>
    </header>
  );
}

export default Header;
