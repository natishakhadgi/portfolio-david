import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme(
  {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
        xxl: 1750,
      },
    },
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
      h2: { // nav title
        fontFamily: 'Poppins',
        fontSize: '2rem',
        fontWeight: 500,
      },
      title1: { // Exp Company
        fontFamily: 'Poppins',
        fontSize: '25px',
        fontWeight: 500,
        color: '#000000',
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
      body2: { // Experience Date
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: '20px',
        color: '#000000'
      },
      body3: { // Project Popup desc
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: '17px',
        color: '#000000'
      },
      bullet: {
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: '20px',
        color: '#000000'
      },
      navItem: {
        fontFamily: 'Poppins',
        fontWeight: 500,
        fontSize: '16px',
        color: 'black',
        '&:hover': {
          color: '#c8c8c8',
        }
      },
      button: {
        fontFamily: 'Poppins',
        fontSize: '16px',
        textTransform: 'none',
        color: 'black',
        
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