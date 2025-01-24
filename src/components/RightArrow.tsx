function RightArrow({ onClick }) {
  return (
    <div className="cursor-pointer text-mintGreen-50 hover:text-blue-600 active:text-blue-900 justify-self-end">
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 8 14"
        // onClick={onClick}
        onPointerDown={onClick}
      >
        <path
          stroke="url(#customGradient)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
        />
        <defs>
          <linearGradient id="customGradient" x1="0" y1="0" x2="1" y2="1">
            <stop
              offset="0%"
              style={{ stopColor: "#FFC4A3", stopOpacity: 1 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#D8B2F0", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#B2D8F0", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
export default RightArrow;
