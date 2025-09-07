import { useState, useEffect } from "react";

export function useLocalStorage<T>(key:string, initialValue:T){
    
    const [value,setValue] = useState<T>(() => {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) as T : initialValue
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    },[key, value]);

    return [value, setValue] as const;
}