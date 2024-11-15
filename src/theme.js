import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme(
  {
    typography: {
      primary: {
        fontFamily: [
          'Poppins',
          'sans-serif',
        ].join(','),
        fontWeightLight: 200,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
      },
      h1: { // name, section title
        fontFamily: 'Poppins',
        fontSize: '3rem',
        fontWeight: 600,
        // '@media (max-width:600px)': {
        //   fontSize: 65,
        // },
      },
      h2: { // project title
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight: 500,
        // color: 'white',
        // '@media (max-width:600px)': {
        //   fontSize: 20,
        // },
      },
      h3: { // project description
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: 200,
        fontStyle: 'italic',
        // color: 'white',
        // '@media (max-width:600px)': {
        //   fontSize: 14,
        // },
      },
      body1: {
        fontFamily: 'Poppins',
        fontSize: '1.5rem',
        // fontWeight: 200,
        color: '#000000',
      },
      body2: {
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: '20px',
        color: '#000000'
      },
      button: {
        textTransform: 'none',
        color: '#F5F5F5'
      }
    },
    palette: {
      primary: {
        main: '#F5F5F5',
        light: '',
        dark: '',
        contrastText: '#000000'
      },
      purple: {
        light: '#E4D8EA',
        medium: '#C57EC5',
        dark: '#8E01FD'
      }
    }
  }
);

theme = responsiveFontSizes(theme);
export default theme;