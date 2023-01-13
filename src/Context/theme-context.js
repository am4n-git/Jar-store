import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({ theme: "light" });

const ThemeProvider = ({ children, value }) => {
  const [theme, setTheme] = useState("light");
  function changeTheme() {
    if (theme !== "dark") {
      setTheme("dark");
    }
    if (theme !== "light") {
      setTheme("light");
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
