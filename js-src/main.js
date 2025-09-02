const _jsxFileName = "src/main.tsx";import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

createRoot(document.getElementById('root')).render(
  React.createElement(Provider, { store: store, __self: this, __source: {fileName: _jsxFileName, lineNumber: 8}}
    , React.createElement(App, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 9}} )
  )
)
