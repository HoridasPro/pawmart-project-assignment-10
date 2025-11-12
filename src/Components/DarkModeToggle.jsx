import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Local storage থেকে theme load
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") setDarkMode(true);
  }, []);

  // Body class পরিবর্তন
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="p-4">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-yellow-400 dark:text-black transition-colors duration-300"
      >
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <p className="mt-4 text-gray-900 dark:text-gray-100">
        This text changes color in dark/light mode.
      </p>
    </div>
  );
};

export default DarkModeToggle;
