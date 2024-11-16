import { Box, List, ListItem, Typography } from "@mui/material";
import { PROJ_MAN, SOFTWARE } from "../../assets/constants";
import { StyledBox } from "../StyledBox";

export const SubHero = (() => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
      <StyledBox>
        <Typography variant="h1">Project Experience</Typography>
        <List sx={{ listStyleType: 'disc' }}>
          {
            PROJ_MAN.map(bullet => {
              return <ListItem sx={{ display: 'list-item', pt: 0, pb: '5px' }} key={`project_experience::${bullet}`}>
                  <Typography variant='bullet'>{bullet}</Typography>
                </ListItem>
            })
          }
        </List>
      </StyledBox>
      <StyledBox>
        <Typography variant="h1">Software</Typography>
        <List sx={{ listStyleType: 'disc' }}>
          {
            SOFTWARE.map(bullet => {
              return <ListItem sx={{ display: 'list-item', pt: 0, pb: '5px' }} key={`software::${bullet}`}>
                <Typography variant='bullet'>{bullet}</Typography>
                </ListItem>
            })
          }
        </List>
      </StyledBox>
    </Box>
  );
});