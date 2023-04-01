import { createContext, useContext, useState } from "react";

const DarkThemeContext = createContext({ darkMode: false });

const DarkThemeProvider = ({ children, value }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("en");
  function changeTheme() {
    setDarkMode(!darkMode);
  }
  function changeLanguage() {
    setLanguage(language === "en" ? language === "es" : "en");
  }
  return (
    <DarkThemeContext.Provider
      value={{ darkMode, changeTheme, language, changeLanguage }}
    >
      {children}
    </DarkThemeContext.Provider>
  );
};

const useDarkMode = () => useContext(DarkThemeContext);

export { useDarkMode, DarkThemeProvider };
