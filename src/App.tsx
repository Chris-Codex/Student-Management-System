import { useState } from 'react'
import Login from './pages/Login'
import {BrowserRouter, Routes, Route} from "react-router"
import Register from './pages/Register'

function App() {
  
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
