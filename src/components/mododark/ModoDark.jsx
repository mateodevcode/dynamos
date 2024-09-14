"use client";
import { useState } from "react";
import { BsMoonFill, BsSun } from "react-icons/bs";

const ModoDark = ({color}) => {
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
      className="flex flex-row justify-center items-center m-2 select-none"
      onClick={toggleDark}
    >
      {dark == "dark" ? (
        <BsSun className={`${color} text-xl cursor-pointer`} />
      ) : (
        <BsMoonFill className={`${color} text-xl cursor-pointer`} />
      )}
    </div>
  );
};

export default ModoDark;
