import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import AuthContext from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContext>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthContext>
)
