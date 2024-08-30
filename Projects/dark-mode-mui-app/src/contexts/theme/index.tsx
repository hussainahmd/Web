import { createContext, PropsWithChildren, FC, useState, useEffect } from 'react'
import * as type from './types'
import { Theme, ThemeProvider, useMediaQuery } from '@mui/material'
import { AppDarkTheme, AppLightTheme } from './theme'

export const ThemeContext = createContext<type.ThemeContext | null>(null)

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {

    const [themeMode, setThemeMode] = useState<type.ThemeMode>('dark')
    const [theme, setTheme] = useState<Theme>(AppLightTheme)

    const systemTheme: Exclude<type.ThemeMode, 'system'> = useMediaQuery('(prefers-color-scheme: dark)')
        ? 'dark'
        : 'light'

    
    useEffect(() => {
        const themeModeFromPref = _getThemeModeToPref()
        setThemeMode(themeModeFromPref)
    }, [])
    

    useEffect(() => {

        switch (themeMode) {
            case 'light':
                setTheme(AppLightTheme)
                break
            case 'dark':
                setTheme(AppDarkTheme)
                break
            case 'system':
                systemTheme === 'dark' ? setTheme(AppDarkTheme) : setTheme(AppLightTheme)
                break
        }

        return () => {

        }
    }, [themeMode, systemTheme])

    const switchThemeMode = (mode: type.ThemeMode) => {
        setThemeMode(mode)
        _setThemeModeToPref(mode)
    }

    const _setThemeModeToPref = (mode: type.ThemeMode) => {
        localStorage.setItem('themeMode', mode)
    }

    const _getThemeModeToPref = (): type.ThemeMode => {
        const themeModePref = localStorage.getItem('themeMode') as type.ThemeMode
        if(themeModePref)
            return themeModePref

        return 'light'
    }

    return (
        <ThemeContext.Provider value={{
            themeMode,
            switchThemeMode
        }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    )
}
