import { Theme, createTheme } from '@mui/material/styles'


export const AppLightTheme: Theme = createTheme({
    palette: {
        background:{
            default:'#f3fcff',
            paper:'#ffffff'
        }
    },
})
export const AppDarkTheme: Theme = createTheme({
    palette: {
        mode:'dark',
        background:{
            default:'#212527',
            paper:'#292c31'
        }
    },
})

