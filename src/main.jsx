import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import App from './App'
import Dashboard from './pages/Dashboard'
import DashboardSettings from './pages/DashboardSettings'
import DashboardLayout from './layouts/DashboardLayout'
import NotFound from './pages/NotFound'
import Login from './pages/Login'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/not-found' element={<NotFound />} />
      <Route path='login' element={<Login />}/>
      <Route path='home' element={<Home />} />
      <Route path='dashboard' element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='settings' element={<DashboardSettings />} />
      </Route>
      <Route path='cities'>
        <Route index element={<Cities />} />
        <Route path=':citySlug' element={<City />} />
      </Route>

      <Route path='*' element={<Navigate to={"/not-found"} replace />} />
    </Routes>
  </BrowserRouter>,
)
