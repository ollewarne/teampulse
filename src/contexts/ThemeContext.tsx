import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react'

type Theme = 'light' | 'dark';

type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);


export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>(
        () => {
            const stored = localStorage.getItem("theme");
            return stored === 'dark' || stored === 'light' ? stored : 'light';
        }
    )

    useEffect(
        () => {
            localStorage.setItem("theme", theme)
        }, [theme]
    )

    function toggleTheme() {
        useCallback(() => { setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')) }, [theme])
    }

    const value = useMemo(() => ({
        theme, setTheme, toggleTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme used outside of ThemeProvider")

    return context;
}

