import { createTheme } from '@mui/material/styles';

const primaryGreen = '#7AC943';
const secondaryBlue = '#3FA9F5';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: primaryGreen
    },
    secondary: {
      main: secondaryBlue
    },
    background: {
      default: '#f4f4f4',
      paper: '#ffffff'
    }
  },
  typography: {
    fontFamily:
      '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h5: {
      fontWeight: 600
    },
    h6: {
      fontWeight: 600
    },
    body1: {
      fontSize: 14
    },
    body2: {
      fontSize: 13,
      color: '#666666'
    }
  },
  shape: {
    borderRadius: 10
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 999
        }
      }
    }
  }
});
