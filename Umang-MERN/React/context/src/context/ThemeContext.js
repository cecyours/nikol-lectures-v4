import { createContext, useState } from "react";


// create a context 
export const ThemeContext = createContext()



// create a provider 
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }



    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )


}