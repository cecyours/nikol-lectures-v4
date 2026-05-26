import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setUsers(data)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-8">
                All Users
            </h1>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            {user.name}
                        </h2>
                        <p className="text-gray-600 text-sm">
                            📧 {user.email}
                        </p>
                        <p className="text-gray-600 text-sm">
                            📞 {user.phone}
                        </p>
                        <p className="text-gray-500 text-sm mt-2">
                            🌐 {user.website}
                        </p>
                        <Link
                            to={`users/${user.id}`}
                            className="mt-4 inline-block text-center bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            View More
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Users