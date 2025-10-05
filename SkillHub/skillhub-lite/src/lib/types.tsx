export interface User {
    id: string;
    name: string;
    role: 'client' | 'freelancer';
}

export type AuthContextType = {
    user : User | null;
    login: (name:string) => void;
    logout: () => void;
}

export type Gig = {
    id:string;
    title:string;
    price:number;
    freelancerId:string;
    description:string;
}