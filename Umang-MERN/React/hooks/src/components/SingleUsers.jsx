import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const SingleUsers = () => {
    const { id } = useParams()
    const [user, setUser] = useState(null)

    const fetchUser = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
        const data = await res.json()
        setUser(data)
    }

    useEffect(() => {
        fetchUser()
    }, [id])

    if (!user) {
        return <div className="text-center mt-10 text-gray-600">Loading...</div>
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
                
                {/* Avatar */}
                <div className="flex flex-col items-center">
                    <img
                        src={`https://i.pravatar.cc/150?img=${user.id}`}
                        alt={user.name}
                        className="w-24 h-24 rounded-full mb-4 shadow-md"
                    />
                    <h1 className="text-2xl font-bold text-gray-800">
                        {user.name}
                    </h1>
                    <p className="text-gray-500 text-sm">@{user.username}</p>
                </div>

                {/* Info */}
                <div className="mt-6 space-y-3 text-sm text-gray-700">
                    <p><span className="font-semibold">📧 Email:</span> {user.email}</p>
                    <p><span className="font-semibold">📞 Phone:</span> {user.phone}</p>
                    <p><span className="font-semibold">🌐 Website:</span> {user.website}</p>
                    
                    <p>
                        <span className="font-semibold">🏢 Company:</span>{' '}
                        {user.company?.name}
                    </p>

                    <p>
                        <span className="font-semibold">📍 Address:</span>{' '}
                        {user.address?.street}, {user.address?.city}
                    </p>
                </div>

                {/* Button */}
                <Link
                    to="/"
                    className="block mt-6 text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    ← Back to Users
                </Link>
            </div>
        </div>
    )
}

export default SingleUsers