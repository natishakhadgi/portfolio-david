import { Box, Typography } from "@mui/material";
import { CERTIFICATES } from "../../assets/constants";
import { StyledBox } from "../StyledBox";

export const Certificates = (() => {
  return (
    <Box>
      <Typography variant='h1'>Certificates</Typography>
      <Box display={'flex'} flexWrap='wrap' justifyContent={'space-between'}>
        {
          CERTIFICATES.map(cert => {
            return (
              <StyledBox key={`${cert.name}`} width='280px'>
                <img src={`${cert.image}`} style={{width:'auto', height:'200px'}}/>
                <Typography>{cert.name}</Typography>
              </StyledBox>
            )
          })
        }
      </Box>
    </Box>
  );
});