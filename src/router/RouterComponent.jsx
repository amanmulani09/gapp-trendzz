import React from 'react'
import {Routes,Route} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import { Main,Login,Signup, Product,Account } from '../component/component'
const RouterComponent = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/product" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/account' element={<ProtectedRoute>
                <Account/>
            </ProtectedRoute>} />
        </Routes>
    </div>
  )
}

export default RouterComponent