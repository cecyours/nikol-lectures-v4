import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AdminRoute() {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Loading...</p>
            </div>
        );
    }

    // Not logged in
    if (!user) {
        return (
            <Navigate
                to="/login"
                replace
            />
        );
    }

    // Logged in but not admin
    if (user.role !== "admin") {
        console.log(user.role);
        
        return (
            <Navigate
                to="/"
                replace
            />
        );
    }

    // Logged in + admin
    return <Outlet />;
}

export default AdminRoute;