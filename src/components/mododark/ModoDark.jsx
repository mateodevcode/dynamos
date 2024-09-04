"use client";
import { useState } from "react";
import { BsMoonFill, BsSun } from "react-icons/bs";

const ModoDark = () => {
  const [dark, setDark] = useState("dark");

  const toggleDark = () => {
    if (dark === "dark") {
      setDark("light");
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      setDark("dark");
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  };

  return (
    <div
      className="flex flex-row justify-center items-center mx-2 select-none"
      onClick={toggleDark}
    >
      {dark == "dark" ? (
        <BsSun className="text-lg cursor-pointer hover:text-gray-500" />
      ) : (
        <BsMoonFill className="text-lg cursor-pointer hover:text-gray-500" />
      )}
    </div>
  );
};

export default ModoDark;
