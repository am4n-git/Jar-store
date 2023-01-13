import { createContext, useContext, useState } from "react";

const DarkThemeContext = createContext({ darkMode: false });

const DarkThemeProvider = ({ children, value }) => {
  const [darkMode, setDarkMode] = useState(true);
  function changeTheme() {
    setDarkMode(!darkMode);
  }
  return (
    <DarkThemeContext.Provider value={{ darkMode, changeTheme }}>
      {children}
    </DarkThemeContext.Provider>
  );
};

const useDarkMode = () => useContext(DarkThemeContext);

export { useDarkMode, DarkThemeProvider };
