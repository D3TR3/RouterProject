import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import App from './App'
import Dashboard from './pages/Dashboard'
import DashboardSettings from './pages/DashboardSettings'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='home' element={<Home />} />
      <Route path='dashboard'>
        <Route index element={<Dashboard />}/>
        <Route path='settings' element={<DashboardSettings />}/>
      </Route>
    </Routes>
  </BrowserRouter>,
)
