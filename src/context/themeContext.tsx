import {ReactNode, createContext, useState, useEffect} from "react";
import {getTheme, ThemeName} from "../style/theme";
import {GlobalStyle} from "../style/global";
import {ThemeProvider} from "styled-components";

const defaultThemeName = "light" as ThemeName;
const themeLocalStorageKey = "bookstore_theme";

interface State {
    themeName: ThemeName;
    toggleTheme: () => void;
}

export const state: State = {
    themeName: defaultThemeName,
    toggleTheme: () => {}
};

export const ThemeContext = createContext<State>(state);

export const BookStoreThemeProvider = ({children}: { children: ReactNode }) => {
    const [themeName, setThemeName] = useState<ThemeName>(defaultThemeName);
    const toggleTheme = () => {
        setThemeName(themeName === "light" ? "dark" : "light");
        localStorage.setItem(themeLocalStorageKey, themeName === "light" ? "dark" : "light");
    };

    useEffect(() => {
        const savedThemeName = localStorage.getItem(themeLocalStorageKey) as ThemeName;
        setThemeName(savedThemeName || defaultThemeName);
    }, []);

    return (
        <ThemeContext.Provider value={{themeName, toggleTheme}}>
            <ThemeProvider theme={getTheme(themeName)}>
                <GlobalStyle themeName={themeName}/>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};