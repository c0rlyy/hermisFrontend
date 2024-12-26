function LoginHeader() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-2 sm:p-9 lg:p-4 text-white sm:rounded-none  shadow-xl text-center lg:mb-24">
      <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold mb-2">
        Hermis
      </h1>
      <p className="text-sm sm:text-lg lg:text-xl">
        A fast and{" "}
        <span className="text-yellow-400 font-bold">reliable</span>{" "}
        timetable for Varsovia students
      </p>
    </div>
  );
}

export default LoginHeader;
