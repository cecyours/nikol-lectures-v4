import React, { useState } from 'react'

const State = () => {

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }




    return (
        <div>{theme}



            <button onClick={toggleTheme}>CLick men</button>

        </div>
    )
}

export default State