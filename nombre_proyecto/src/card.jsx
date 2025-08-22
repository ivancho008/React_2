import { useState, useEffect } from "react";

export default function Card() {
  const [darkMode, setDarkMode] = useState(false);

  // 👉 Al cargar la página, revisamos si hay un valor guardado en localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(savedMode === "true"); // localStorage guarda strings
    }
  }, []);

  // 👉 Cada vez que darkMode cambie, lo guardamos en localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div
      className={`max-w-sm mx-auto p-6 rounded-lg shadow-md transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <img
        src="https://resizer.glanacion.com/resizer/v2/ramon-valdes-don-ramon-murio-hace-30-YWXW4ZBZ75HYNDEODIKGLYLSWA.jpg?auth=4501ef1316f53411539b295d6d2c2f711bbb3f1c96856cc7028f042289e519e4&width=768&quality=70&smart=false"
        alt="Avatar de Ramon Gutierrez Soler"
        className="rounded-full w-32 h-32 mx-auto"
      />

      <h2 className="mt-4 text-2xl font-semibold text-center">
        RAMON GUTIERREZ SOLER
      </h2>

      <p className="mt-2 italic text-center">
        {darkMode ? "Apasionado (modo oscuro)" : "Apasionado y de buen humor"}
      </p>

      <button
        onClick={toggleTheme}
        className="mt-6 w-full py-2 rounded-lg border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        {darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      </button>
    </div>
  );
}
