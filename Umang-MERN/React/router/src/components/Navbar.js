import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>

            <nav style={{
                padding: "20px", textAlign: "center", backgroundColor:
                    "#4caf50"
            }}>
                <Link to="/" style={{
                    margin: "0 15px", color: "white",
                    textDecoration: "none"
                }}>Home</Link>
                <Link to="/about" style={{
                    margin: "0 15px", color: "white",
                    textDecoration: "none"
                }}>About</Link>
                <Link to="/contact" style={{
                    margin: "0 15px", color: "white",
                    textDecoration: "none"
                }}>Contact</Link>
                 <Link to="/users" style={{
                    margin: "0 15px", color: "white",
                    textDecoration: "none"
                }}>Users</Link>
            </nav>
        </div>
    )
}

export default Navbar