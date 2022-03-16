import './App.css';
import { Header } from './components/Header/Header';
import { createTheme, ThemeProvider } from '@mui/material';
import Footer from './components/Footer/Footer';
import MainContainer from './components/MainContainer/MainContainer';
import { QueryClient, QueryClientProvider } from 'react-query';

const darkTheme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#c7b9b9"
        },
      },
    },
    MuiCard: {
      styleOverrides: {

        root: {
          backgroundColor: 'primary',
          sx: {
            '&:hover': {
              backgroundColor: 'primary.dark',
              opacity: [0.9, 0.8, 0.7],
            },

          }
        }
      }
    }
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#2b5a4a',
      dark: '#fdcf0c'
    },
    secondary: {
      main: "#14312c",
    },


  },
});

const queryClient = new QueryClient();
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Header />
          <MainContainer />
        <Footer />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
