import { Box, Typography } from "@mui/material";
import { CERTIFICATES } from "../../assets/constants";
import { StyledBox } from "../StyledBox";

export const Certificates = (() => {
  return (
    <Box>
      <Typography variant='h1'>Certificates</Typography>
      <Box display={'grid'} gridTemplateColumns="repeat(auto-fill, minmax(280px, 1fr))" gap='10px' justifyItems={'center'}>
        {
          CERTIFICATES.map(cert => {
            return (
              <StyledBox key={`${cert.name}`} maxHeight='400px'>
                <img src={`${cert.image}`} style={{width:'auto', height:'200px'}}/>
                <Typography variant='title2'>{cert.name}</Typography>
              </StyledBox>
            )
          })
        }
      </Box>
    </Box>
  );
});