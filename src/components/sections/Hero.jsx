import { Box, Button, Grid2, Typography } from "@mui/material";
import { INTRO_BLURB, LINKS } from "../../assets/constants";
import { StyledBox } from "../StyledBox";

export const Hero = (() => {

  return (
    <StyledBox
    sx={{
      // backgroundColor: 'primary.bg',
      maxWidth: '100%',
      // height: props.height || '350px',
      // ...gradientBorder
    }}>
      <Typography variant="h1">David Koster</Typography>
      <Box>
        <Typography>{INTRO_BLURB}</Typography>
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
    </StyledBox>
  );
});