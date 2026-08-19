import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function UserLayout() {
    const { user, loading, logout } = useAuth();

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Header */}
            <header className="border-b bg-white">

                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-2xl font-bold text-gray-900"
                    >
                        E-Commerce
                    </Link>


                    {/* Navigation */}
                    <nav className="flex items-center gap-6">

                        {/* Public */}
                        <Link
                            to="/"
                            className="text-gray-700 transition hover:text-black"
                        >
                            Home
                        </Link>

                        <Link
                            to="/products"
                            className="text-gray-700 transition hover:text-black"
                        >
                            Products
                        </Link>

                        <Link
                            to="/cart"
                            className="text-gray-700 transition hover:text-black"
                        >
                            Cart
                        </Link>


                        {/* Auth */}
                        {loading ? (

                            <span className="text-sm text-gray-400">
                                Loading...
                            </span>

                        ) : user ? (

                            <>
                                {/* Logged in user */}
                                <Link
                                    to="/profile"
                                    className="text-gray-700 hover:text-black"
                                >
                                    Hi, {user.name}
                                </Link>

                                <button
                                    onClick={logout}
                                    className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
                                >
                                    Logout
                                </button>
                            </>

                        ) : (

                            <>
                                {/* Guest */}
                                <Link
                                    to="/login"
                                    className="text-gray-700 transition hover:text-black"
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/signup"
                                    className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
                                >
                                    Sign Up
                                </Link>
                            </>

                        )}

                    </nav>

                </div>

            </header>


            {/* Page */}
            <main>
                <Outlet />
            </main>


            {/* Footer */}
            <footer className="border-t bg-white py-6 text-center text-sm text-gray-500">
                © 2026 E-Commerce
            </footer>

        </div>
    );
}

export default UserLayout;