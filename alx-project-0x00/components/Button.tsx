import { ButtonProps } from "@/interfaces";
import React from "react";
const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button
      className={`bg-blue-500 text-white px-4 py-2 font-semibold hover:bg-blue-600 ${styles}`}
    >
      {title}
    </button>
  );
};
export default Button;
