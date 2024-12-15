import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global.js';
import Container from './components/Container.js';

const theme = {
  colors: {
    header: 'hsl(193, 100%, 96%)',
    body: '#fff',
    footer: '#ff0099'
  },

  projectColors: {
    VeryPaleCyan: 'hsl(193, 100%, 96%)',
    Pink: 'hsl(322, 100%, 66%)',
    VeryDarkCyan: 'hsl(192, 100%, 9%)',
    GrayishBlue: 'hsl(208, 11%, 55%)'
  },
  fonts: {
    main: 'Poppins, sans-serif',
    secondary: 'Open Sans, sans-serif'
  },
  desktop: '768px'
};

// App component
function App() {
  return (
    <ThemeProvider theme = {theme}>
           <GlobalStyles />
    <Container />
    </ThemeProvider>

  );
}

export default App;
