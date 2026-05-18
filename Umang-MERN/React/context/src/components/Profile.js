import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const Profile = () => {

    const { theme } = useContext(ThemeContext);
    return (

        <div
            style={{
                margin: "20px auto",
                padding: "20px",
                width: "300px",
                textAlign: "center",
                backgroundColor: theme === "light" ? "#eee" : "#555",
                color: theme === "light" ? "#333" : "#f5f5f5",
                borderRadius: "10px",
            }}
        ><h3>User Profile</h3>
            <p>Theme is currently {theme}</p></div>
    )
}

export default Profile