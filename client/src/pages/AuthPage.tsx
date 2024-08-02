import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AuthInput } from "../components/AuthInput";
import { AuthFormValues } from "../types/types";

const AuthPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const [formValues, setFormValues] = useState<AuthFormValues>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async  (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      
      console.log(formValues); 
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  
  };

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 w-screen pb-10 md:pb-0 md:h-screen flex flex-col justify-center items-center md:flex md:flex-row md:gap-x-24">
      <img
        className="w-40 my-12 md:hidden"
        src="/images/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <img
        src="/images/nxt-trendz-login-img.png"
        className="w-72 md:w-3/5 md:max-w-lg"
        alt="website login"
      />
      <form
        onSubmit={handleSubmit}
        className="bg-white flex flex-col p-5 md:p-8 max-w-96 md:max-w-md w-full rounded-lg space-y-6 mt-5 shadow-xl hover:shadow-2xl"
      >
        <div className="flex justify-center">
          <img
            src="/images/nxt-trendz-logo-img.png"
            className="w-48 hidden md:block"
            alt="website logo"
          />
        </div>
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 text-center font-sans">
          {isSignUp ? "Join us and Explore!" : "Explore, Shop, and Seize!"}
        </h1>

        {isSignUp && (
          <AuthInput
            type="text"
            id="name"
            label="Name"
            value={formValues.name}
            onChange={handleChange}
          />
        )}
        <AuthInput
          type="email"
          id="email"
          label="Email"
          value={formValues.email}
          onChange={handleChange}
        />
        <AuthInput
          type="password"
          id="password"
          label="Password"
          value={formValues.password}
          onChange={handleChange}
        />
        {isSignUp && (
          <AuthInput
            type="password"
            id="confirm-password"
            label="Confirm Password"
            value={formValues.confirmPassword}
            onChange={handleChange}
          />
        )}

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="keep-in-loop"
              className="h-4 w-4 rounded"
            />
            <label
              className="ml-2 text-sm text-gray-600"
              htmlFor="keep-in-loop"
            >
              Keep me in the loop
            </label>
          </div>

          <a href="/" className="text-sm text-blue-600 hover:underline">
            Can't recall?
          </a>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-bold text-sm md:text-lg h-10 md:h-12 rounded-lg hover:bg-blue-700"
        >
          {isSignUp ? "Sign Up" : "Login"}
        </button>

        <div className="flex items-center justify-center space-x-3">
          <hr className="w-full border-gray-300" />
          <span className="text-gray-400">or</span>
          <hr className="w-full border-gray-300" />
        </div>

        <div className="flex justify-center gap-6 pb-5">
          <button className="flex items-center px-6 py-2 border border-gray-400 rounded hover:bg-gray-200">
            <FcGoogle className="w-5 h-5 mr-3" /> Google
          </button>
          <button className="flex items-center px-6 py-2 border border-gray-400 rounded hover:bg-gray-200">
            <FaFacebook className="w-5 h-5 mr-3 text-blue-500" />
            Facebook
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <button
              type="button"
              onClick={() => setIsSignUp((prev) => !prev)}
              className="text-blue-600 hover:underline ml-2"
            >
              {isSignUp ? "Login" : "Sign Up"}
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
