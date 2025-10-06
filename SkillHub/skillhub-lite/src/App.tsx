import './App.css'
import { Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import LoginPage from './components/LoginPage';
import GigListPage from './features/gigs/GigListPage';
import Navbar from './components/navbar';
import { ProtectedRoute } from './components/protectedRoute';

const GigDetailPage = () => <h1>Gig Detail (Public with Params)</h1>;
const ProviderDashboard = () => <h1>Provider Dashboard (Protected)</h1>;
const SettingsPage = () => <h1>Settings (Protected)</h1>;

function App() {

  return (
    <>
      <Navbar/>
      <main className="flex justify-center items-center p-8 h-screen">
        <Routes>
          <Route path="/" element={<GigListPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/gigs/:id" element={<GigDetailPage />} />

          <Route element={<ProtectedRoute requiredRole='freelancer' />}>
            <Route path="/dashboard" element={<ProviderDashboard/>} />
            <Route path="/settings" element={<SettingsPage/>} />
          </Route>

          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      </main>

      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}

export default App
