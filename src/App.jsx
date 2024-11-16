import './App.css'
import { Box, Container } from '@mui/material';
import { Hero } from './sections/Hero';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { SubHero } from './sections/SubHero';
import { StyledBox } from './components/StyledBox';
import { Certificates } from './sections/Certificates';

function App() {

  return (
    <Box 
      sx={{
        display:'flex', 
        width: '100vw',
        overflowY: 'scroll', 
        justifyContent:'center', 
        alignItems: 'center', 
        background: 'radial-gradient(circle,rgba(170, 170, 170, 1) 0%,rgba(255, 255, 255, 1) 100%)'
      }}
    >
      <StyledBox 
        sx={{
          width: '90vw',
          // padding: '50px 100px',
          display:'flex',
          flexDirection: 'column',
          gap: 2,
          background: 'rgba(255, 255, 255, 0.5)'
        }}
      >
        <Hero />
        <SubHero />
        <Experience />
        <Projects />
        <Certificates />
      </StyledBox>
      
    </Box>
  )
}

export default App
