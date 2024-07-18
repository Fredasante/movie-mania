import React from "react";

type ButtonProps = {
  onClick: () => void;
  label: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, label, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 rounded text-white text-sm tracking-wider font-medium border-none outline-none ${className} bg-teal-600 hover:bg-teal-700`}
    >
      {label}
    </button>
  );
};

export default Button;
