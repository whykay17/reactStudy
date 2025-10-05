import { useContext, useState, createContext} from "react";
import type { ReactNode } from "react";
import type { User, AuthContextType } from "../lib/types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider ({children}: {children: ReactNode}) {
    const [user, setUser] = useState<User | null>(null);

    const login = (name: string) => {
        const role = name.toLowerCase() === 'freelancer' ? 'freelancer' : 'client';
        setUser({id: 'mock-123',name: name, role: role})
    };

    const logout = () => {
        setUser(null);
    }

    const ContextValue:AuthContextType = {
        user,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={ContextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}