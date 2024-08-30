export type ThemeMode = 'light' | 'dark' | 'system'

export type ThemeContext = {
    themeMode: ThemeMode
    switchThemeMode: (mode: ThemeMode) => void
}
