import { Box, Typography } from "@mui/material";
import { CERTIFICATES } from "../assets/constants";
import { StyledBox } from "../components/StyledBox";
import { SectionTitle } from "../components/SectionTitle";
import { onHoverShadow } from "../assets/styles";

export const Certificates = (() => {
  return (
    <Box>
      <SectionTitle title='Certificates'/>
      <Box display={'grid'} gridTemplateColumns="repeat(auto-fit, minmax(320px, 1fr))" gap='10px' justifyItems={'center'}>
        {
          CERTIFICATES.map(cert => {
            return (
              <StyledBox
                key={`${cert.name}`}
                maxHeight='400px'
                sx={onHoverShadow}
              >
                <div>
                  <img src={`${cert.image}`} style={{ width: 'auto', height: '200px' }} />
                </div>
                <Typography variant='title2'>{cert.name}</Typography>
              </StyledBox>
            )
          })
        }
      </Box>
    </Box>
  );
});