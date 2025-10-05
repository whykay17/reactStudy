import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


function Navbar() {

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
            <Link to="/" className="text-2xl font-bold">SkillHub Lite</Link>
            <nav className="flex space-x-4 items-center">
                {user ? (
                    <>
                        <span className={`text-sm font-medium ${user.role === 'freelancer' ? 'text-yellow-400' : 'text-green-400'}`}>
                            Welcome, {user.name} ({user.role})
                        </span>

                        {/* Role-Based UI: Only show Dashboard link to Providers */}
                        {user.role === 'freelancer' && (
                            <Link to="/dashboard" className="text-blue-300 hover:text-white transition">
                                Dashboard
                            </Link>
                        )}

                        <button
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded transition"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    // Logic for Guest User
                    <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded transition">
                        Login
                    </Link>
                )}
            </nav>
        </header>

    )
}

export default Navbar;