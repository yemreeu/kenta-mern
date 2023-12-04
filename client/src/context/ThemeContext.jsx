import { createContext, useState } from "react";

export const ThemeContext = createContext({
  toggle: () => {},
  mode: "dark",
});

export function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState("dark");
  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
}