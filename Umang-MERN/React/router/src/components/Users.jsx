import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Users = () => {

    const [users, setUsers] = useState({})

    const fetchUser = async () => {
        try {

            const res =  await axios.get('http://localhost:9000/users')
            const data = res.data
            console.log(data);

        } catch (error) {
            console.log(error);


        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <div>
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>Users Page</h1>
                <p>This is page for list all users</p>
            </div>
        </div>
    )
}

export default Users