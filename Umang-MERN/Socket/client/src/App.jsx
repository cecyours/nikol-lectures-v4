import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AdminLayout from './Layouts/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import UserLayout from './Layouts/UserLayout'
import ProtectedRoute from './routes/ProtectedRoute'
import TestProtected from './components/TestProtected'
import AdminRoute from './routes/AdminRoute'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
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


        <Route element={<AdminRoute />}>
          <Route path='/admin' element={<AdminLayout />}>
            <Route path='/admin/' element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
