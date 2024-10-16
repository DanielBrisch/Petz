import Register from "./screens/register/register"
import './reset.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Register/>
    </ThemeProvider>
    </>
  )
}

export default App
