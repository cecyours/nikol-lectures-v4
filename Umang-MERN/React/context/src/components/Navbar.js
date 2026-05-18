import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {

    const { theme } = useContext(ThemeContext);
    return (

        <nav
            style={{
                padding: "20px",
                textAlign: "center",
                backgroundColor: theme === "light" ? "#f5f5f5" : "#333",
                color: theme === "light" ? "#333" : "#f5f5f5",
            }}
        >


            <h2>Navbar - {theme} mode</h2>

        </nav>
    )
}

export default Navbar