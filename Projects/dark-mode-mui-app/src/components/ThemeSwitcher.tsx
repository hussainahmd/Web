import { Button, Menu, MenuItem } from '@mui/material'
import PaletteIcon from '@mui/icons-material/Palette'
import { useContext, useRef, useState } from 'react'
import { ThemeContext } from '../contexts/theme'
import { ThemeMode } from '../contexts/theme/types'

const ThemeSwitcher = () => {

    const buttonRef = useRef<HTMLButtonElement>(null)
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const { themeMode, switchThemeMode } = useContext(ThemeContext)!

    const handleOpen = () => {
        setOpenMenu(true)
    }
    const handleClose = () => {
        setOpenMenu(false)
    }

    const handleSwitchTheme = (mode: ThemeMode) => {
        switchThemeMode(mode)
        handleClose()
    }

    return (
        <>
            <Button
                ref={buttonRef}
                variant='contained'
                onClick={handleOpen}
                startIcon={<PaletteIcon />}
            >
                Switch Theme
            </Button >
            <Menu open={openMenu} anchorEl={buttonRef.current} onClose={handleClose}>
                <MenuItem onClick={() => handleSwitchTheme('light')} selected={themeMode === 'light'}>
                    Light
                </MenuItem>
                <MenuItem onClick={() => handleSwitchTheme('dark')} selected={themeMode === 'dark'}>
                    Dark
                </MenuItem>
                <MenuItem onClick={() => handleSwitchTheme('system')} selected={themeMode === 'system'}>
                    System
                </MenuItem>
            </Menu >
        </>
    )
}

export default ThemeSwitcher