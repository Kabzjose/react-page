import React,{createContext,useState} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {  
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
          <div className={theme === "dark" ? "dark" : ""}>
        <div className="min-h-screen transition-colors duration-300 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-sans flex flex-col">
          {children}
        </div>
      </div>
        </ThemeContext.Provider>
    )
}