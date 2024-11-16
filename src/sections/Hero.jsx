import { Box, Button, Grid2, Typography } from "@mui/material";
import { INTRO_BLURB, LINKS } from "../assets/constants";
import { StyledBox } from "../components/StyledBox";
import DavidImg from '../assets/images/davidheadshot.png'


export const Hero = (() => {

  return (
    <StyledBox
    sx={{
      // backgroundColor: 'primary.bg',
      maxWidth: '100%',
      // height: props.height || '350px',
      // ...gradientBorder
      display: 'flex'
    }}>
      {/* <Box sx={{display: 'grid', gridTemplateColumns: "repeat(auto-fill, minmax(275px, 1fr) )", gap: "10px"}}> */}

      <Box sx={{display: 'grid', gridTemplateColumns:'3fr 1fr', gap: "10px"}}>
        <Box>
          <Typography align='left' variant="h1">David Koster</Typography>
          <Box>
            <Typography variant='body1' align='left'>{INTRO_BLURB}</Typography>
            <Box sx={{display:'flex', flexDirection:'row', gap: 2}}>
            {
              LINKS.map(link => {
                return <Button 
                  key={`button::${link.name}`} 
                  variant='outlined' 
                  size='small' 
                  href={link.url}
                  >
                    {link.name}
                  </Button>
              })
            }
            </Box>
          </Box>
        </Box>
        <Box>
          <img src={DavidImg} style={{width:'auto', maxWidth: '400px', borderRadius: '10px'}}/>
        </Box>
      </Box>
      
    </StyledBox>
  );
});