function Button({
  children,
  classes,
  showIcon,
}: {
  children: React.ReactNode;
  classes: string;
  showIcon: boolean;
}) {
  return (
    <button
      className={`bg-gradient-to-r from-primary to-secondary flex items-center rounded-lg gap-1 text-white text-sm font-bold ${classes}`}
    >
      {showIcon && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.5 16.5C13.625 16.5 17 13.125 17 9C17 4.875 13.625 1.5 9.5 1.5C5.375 1.5 2 4.875 2 9C2 13.125 5.375 16.5 9.5 16.5Z"
            stroke="white"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.5 9H12.5"
            stroke="white"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 12V6"
            stroke="white"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      <span className="pt-0.5">{children}</span>
    </button>
  );
}

export default Button;
