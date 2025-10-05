import './App.css'
import { Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import LoginPage from './components/LoginPage';

const GigListPage = () => <h1>Gig List (Public)</h1>;
const GigDetailPage = () => <h1>Gig Detail (Public with Params)</h1>;
const ProviderDashboard = () => <h1>Provider Dashboard (Protected)</h1>;
const SettingsPage = () => <h1>Settings (Protected)</h1>;

function App() {

  return (
    <>
      <header className="bg-blue-600 text-white p-4 shadow-lg flex justify-between items-center">
        <h1 className="text-2xl font-bold">SkillHub Lite</h1>
      </header>
      <main className="flex justify-center items-center p-8 h-screen">
        <Routes>
          <Route path="/" element = {GigListPage()} />
          <Route path="/login" element = {<LoginPage />} />

          <Route path="/gigs/:id" element = {GigDetailPage()} />

          <Route path="/dashboard" element = {ProviderDashboard()} />
          <Route path="/settings" element= {SettingsPage()} />

          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      </main>

      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}

export default App
