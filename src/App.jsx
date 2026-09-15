import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import ForgetPassword from './pages/ForgetPassword/ForgetPassword'
import ResetPassWithMobileNo from './pages/ResetPassword/ResetPassWithMobileNo'
import ResetPassWithSecurityAns from './pages/ResetPassword/ResetPassWithSecurityAns'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/login" element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }>
          </Route>

          <Route path="/signup" element={
            <AuthLayout>
              <Signup />
            </AuthLayout>
          }>
          </Route>

          <Route path="/forget-password" element={
            <AuthLayout>
              <ForgetPassword />
            </AuthLayout>
          }>
          </Route>

          <Route path="/reset-password-mobile-number" element={
            <AuthLayout>
              <ResetPassWithMobileNo />
            </AuthLayout>
          }>
          </Route>

          <Route path="/reset-password-security-answer" element={
            <AuthLayout>
              <ResetPassWithSecurityAns />
            </AuthLayout>
          }>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
