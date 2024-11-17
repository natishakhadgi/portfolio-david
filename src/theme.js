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
        background: 'linear-gradient(to bottom, transparent 50%, #c8c8c8 50%)',
        display:'inline',
      },
      title1: { // Exp Company
        fontFamily: 'Poppins',
        fontSize: '25px',
        fontWeight: 500,
        color: '#000000',
        textDecoration: 'underline'
      },
      title2: { // Exp Role, Proj Title, Certificate Title
        fontFamily: 'Poppins',
        fontSize: '20px',
        fontWeight: 500,
        color: '#000000',
      },
      body1: { // Bio desc
        fontFamily: 'Poppins',
        fontSize: '1.5rem',
        fontWeight: 200,
        color: '#000000',
      },
      body2: { // Experience Date, Project Popup desc
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: '20px',
        color: '#000000'
      },
      bullet: {
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
    }
  }
);

theme = responsiveFontSizes(theme);
export default theme;