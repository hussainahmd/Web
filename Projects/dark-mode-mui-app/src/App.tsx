import { Avatar, Box, Button, Card, CardContent, CardHeader, Chip, Container, Divider, Paper, Stack, Typography, useTheme } from "@mui/material"
import { ThemeContextProvider } from "./contexts/theme"
import ThemeSwitcher from "./components/ThemeSwitcher"

function App() {

  return (
    <div style={{margin:22}}>
      <h1 style={{marginBottom:40}}>MUI Dark Mode</h1>
      <ThemeContextProvider>
        <Container maxWidth='lg'>
          <Paper sx={{p:2}}>
            <Box height={600} p={4}>
              <ThemeSwitcher />
              <Typography variant="h1">Heading</Typography>
              <Card>
                <CardHeader title='Card Title' />
                <CardContent>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni vero tenetur autem ducimus minima consequuntur cumque debitis nam aliquam voluptatum deserunt eos a, quasi eum natus repellendus fugit in adipisci.
                  </Typography>
                </CardContent>
              </Card>
              <Divider sx={{ my: 5 }} />
              <Stack direction='row' spacing={2} alignItems='center' mb={4}>
                <Avatar>PG</Avatar>
                <Chip color="info" label='chip'/>
                <Button>Click Me</Button>
                <Button variant="contained">Click Me</Button>
              </Stack>
              <CustomComponent />
            </Box>
          </Paper>
        </Container>
      </ThemeContextProvider>
    </div>
  )
}

export default App

const CustomComponent = () => {
  const theme = useTheme()
  return (
    <div style={{
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(2),
      color: theme.palette.text.primary
    }}>
      <h1>Custom Component</h1>
    </div>
  )
}