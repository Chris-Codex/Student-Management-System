const _jsxFileName = "src/App.tsx";
import Login from './pages/Login'
import {BrowserRouter, Routes, Route} from "react-router"
import Register from './pages/Register'
import Home from './pages/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Layout from './components/Layout'

function App() {
  
  return (
    React.createElement('main', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 12}}
      , React.createElement(BrowserRouter, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 13}}
        , React.createElement(Routes, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}
          , React.createElement(Route, { path: "/", element: React.createElement(Login, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 15}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 15}} )
          , React.createElement(Route, { path: "/register", element: React.createElement(Register, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 16}} ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 16}} )

          , React.createElement(Route, { element: React.createElement(ProtectedRoute, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 18}}, " " , React.createElement(Layout, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 18}} ), " " ), __self: this, __source: {fileName: _jsxFileName, lineNumber: 18}}
            , React.createElement(Route, { path: "/home", element: React.createElement(Home, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}), __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}} )
          )
        )
      )
    )
  )
}

export default App
