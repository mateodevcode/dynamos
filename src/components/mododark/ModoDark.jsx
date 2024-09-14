"use client";
import { useEffect, useState } from "react";
import { BsMoon, BsMoonFill, BsSun } from "react-icons/bs";

const ModoDark = ({ color }) => {
  const [dark, setDark] = useState("light");

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const bodyClass = document.body.classList.contains("dark")
      ? "dark"
      : "light";
    setTheme(bodyClass);
  }, []);

  const toggleDark = () => {
    if (dark === "dark") {
      setDark("light");
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      setTheme("light");
    } else {
      setDark("dark");
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      setTheme("dark");
    }
  };

  return (
    <div
      className="flex flex-row justify-center items-center m-2 select-none"
      onClick={toggleDark}
    >
      {theme == "dark" ? (
        <BsSun className={`${color} text-lg cursor-pointer hover:text-gray-500 dark:hover:text-gray-500`} />
      ) : (
        <BsMoon className={`${color} text-lg cursor-pointer hover:text-gray-500 dark:hover:text-gray-500`} />
      )}
    </div>
  );
};

export default ModoDark;
