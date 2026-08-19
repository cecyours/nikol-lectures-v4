import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserLayout from "./layouts/UserLayout";

import Login from "../pages/user/Login";
import Signup from "../pages/user/Signup";
import AdminRoute from "../routes/AdminRoute";
import AdminLayout from "./layouts/AdminLayout";
import Home from "../pages/user/Home";
import Dashboard from "../pages/admin/Dashboard";
import ProtectedRoute from "../routes/ProtectedRoute";
import TestProtected from "../pages/user/TestProtected";
import Cart from "../pages/user/Cart";
import Products from "../pages/user/Products";
import AdminProducts from "../pages/admin/Products";
import Profile from "../pages/user/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* USER */}
        <Route element={<UserLayout />}>

          {/* Public */}
          <Route path="/" element={<Home />} />


          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />


          <Route
            path="profile"
            element={<Profile />}
          />
          {/* Login-required pages will be added later */}

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

        </Route>

        <Route element={<ProtectedRoute />}>

          <Route
            element={<UserLayout />}
          >
            <Route
              path="/test-protected"
              element={<TestProtected />}
            />
          </Route>

        </Route>


        {/* ADMIN */}
        <Route element={<AdminRoute />}>

          <Route
            path="/admin"
            element={<AdminLayout />}
          >
            <Route
              path="dashboard"
              element={<Dashboard />}
            />

            <Route
              path="products"
              element={<AdminProducts />}
            />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;