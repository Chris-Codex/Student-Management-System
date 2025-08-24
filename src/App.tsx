import { useState } from 'react'
import Login from './pages/Login'
import {BrowserRouter, Routes, Route} from "react-router"
import Register from './pages/Register'
import Home from './pages/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Layout from './components/Layout'

function App() {
  
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route element={<ProtectedRoute> <Layout /> </ProtectedRoute>}>
            <Route path="/home" element={<Home/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
