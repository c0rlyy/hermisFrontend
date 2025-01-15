function RightArrow({ onClick }) {
  return (
    <div className="cursor-pointer text-mintGreen-50 hover:text-blue-600 active:text-blue-900 justify-self-end">
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 8 14"
        onClick={onClick}
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
        />
      </svg>
    </div>
  );
}
export default RightArrow;
