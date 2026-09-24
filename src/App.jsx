import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import UserLayout from './layouts/UserLayout'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import ForgetPassword from './pages/ForgetPassword/ForgetPassword'
import ResetPassWithMobileNo from './pages/ResetPassword/ResetPassWithMobileNo'
import ResetPassWithSecurityAns from './pages/ResetPassword/ResetPassWithSecurityAns'
import SearchFilter from "./components/SearchFilter/SearchFilter";
import StateManagement from './components/StateManagement/StateManagement'
import {store} from '../src/app/store'
import {Provider} from 'react-redux'
import LifeCycle from '../src/components/FunBaseReactLifeCycle/LifeCycle'
import NotFound from '../src/pages/ErrorPages/NotFound'
import UserDashboard from './components/UserPanel/UserDashboard'
import RtiFillingForm from './components/UserPanel/RtiFillingForm'
import EditProfile from './components/UserPanel/EditProfile'
import ChangePassword from './components/UserPanel/ChangePassword'
 
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }>
          </Route>

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

          <Route path="/search-filter" element={
            <AuthLayout>
              <SearchFilter />
            </AuthLayout>
          }>
          </Route>

          <Route path="/state-management" element={
          <AuthLayout>
          <Provider store={store}>
          <StateManagement />
          </Provider>
          </AuthLayout>
          }>
          </Route>

        <Route path="/life-cycle" element={
          <AuthLayout>
            <LifeCycle />
          </AuthLayout>
        }></Route>

        <Route path="*" element={
            <AuthLayout>
              <NotFound />
            </AuthLayout>
          }>
        </Route>

        <Route path="rti-filling" element={
          <UserLayout>
            <RtiFillingForm />
          </UserLayout>
        }>
        </Route>
       
        <Route path="edit-profile" element={
          <UserLayout>
            <EditProfile />
          </UserLayout>
        }>
        </Route>

        <Route path="change-password" element={
          <UserLayout>
            <ChangePassword />
          </UserLayout>
        }>
        </Route>



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
