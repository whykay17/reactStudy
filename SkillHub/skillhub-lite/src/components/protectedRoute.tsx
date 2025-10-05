import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

type ProtectedRouteProbs = {
    requiredRole?: 'client' | 'freelancer';
}

export const ProtectedRoute = ({requiredRole}:ProtectedRouteProbs) => {
    const {user} = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (requiredRole && user.role !== requiredRole) {
        return <Navigate to="/" replace/>;
    }

    return <Outlet />;
};