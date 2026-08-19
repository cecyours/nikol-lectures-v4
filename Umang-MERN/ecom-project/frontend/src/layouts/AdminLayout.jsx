import { Outlet, Link } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-100">

      <header className="border-b bg-white">
        <div className="flex items-center justify-between px-6 py-4">

          <Link to="/admin/dashboard" className="text-2xl font-bold">
            Admin Panel
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              to="/admin/dashboard"
              className="text-gray-700 hover:text-black"
            >
              Dashboard
            </Link>

            <Link
              to="/admin/products"
              className="text-gray-700 hover:text-black"
            >
              Products
            </Link>

            <Link
              to="/admin/orders"
              className="text-gray-700 hover:text-black"
            >
              Orders
            </Link>

            <Link
              to="/admin/users"
              className="text-gray-700 hover:text-black"
            >
              Users
            </Link>
          </nav>

        </div>
      </header>

      <main className="p-6">
        <Outlet />
      </main>

    </div>
  );
}

export default AdminLayout;