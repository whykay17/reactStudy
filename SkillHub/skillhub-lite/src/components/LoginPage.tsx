import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth";

function LoginPage (){

    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    const auth = useAuth();

    useEffect(() => {
        if (auth.user) {
            navigate('/');
        }
    }, [auth.user, navigate]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username.trim()) {
            auth.login(username.trim());
            navigate('/');
        }
    }

    if (auth.user) {
        return null;
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">SkillHub Lite Login</h2>
            <p className="mb-4 text-sm text-gray-600">
                Try logging in as: <span className="font-semibold text-blue-600">freelancer</span> or anything else for <span className="font-semibold text-green-600">client</span>.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    value={username}
                    placeholder="Enter your name"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-150"
                >Login
                </button>
            </form>
        </div>
    )
}

export default LoginPage;