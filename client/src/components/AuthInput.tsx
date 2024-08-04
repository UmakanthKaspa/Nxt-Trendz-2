import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthInputProps } from "../types/types";

export const AuthInput: React.FC<AuthInputProps> = ({ type, id, label,value,
    onChange}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="relative">
      <input
        type={type === "password" && isPasswordVisible ? "text" : type}
        id={id}
        required
        value={value}
        onChange={onChange}
        placeholder=""
        className="auth-input border border-gray-300 w-full h-10 md:h-12 rounded outline-none px-3"
      />
      <label
        htmlFor={id}
        className="auth-label absolute top-2 left-3 md:top-3 text-gray-400 transition-all"
      >
        {label}
      </label>
      {type === "password" && (
        <button
          onClick={() => setIsPasswordVisible((prev) => !prev)}
          type="button"
          className="absolute right-3 top-1/3"
        >
          {isPasswordVisible ? (
            <FaEye className="text-blue-600" />
          ) : (
            <FaEyeSlash className="text-blue-400" />
          )}
        </button>
      )}
    </div>
  );
};
