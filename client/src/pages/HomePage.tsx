import React from "react";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
const HomePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 w-screen h-screen">
      <NavBar />
      <HeroSection />
    </div>
  );
};

export default HomePage;
