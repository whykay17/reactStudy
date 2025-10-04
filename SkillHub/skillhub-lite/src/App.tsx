import './App.css'
import { Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const GigListPage = () => <h1 className='text-xl p-4'>Gig List Page (/)</h1>;
const LoginPage = () => <h1 className="text-xl p-4">Login Page (/login)</h1>;
const DashboardPage = () => <h1 className="text-xl p-4">Dashboard Page (/dashboard)</h1>;

function App() {

  return (
    <>
      <header className="bg-blue-600 text-white p-4 shadow-lg">
        <h1 className="text-2xl font-bold">SkillHub Lite</h1>
      </header>
      <main className="p-8">
        <Routes>
          <Route path="/" element = {GigListPage()} />
          <Route path="/login" element = {LoginPage()} />
          <Route path="/dashboard" element = {DashboardPage()} />
        </Routes>
      </main>

      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}

export default App
