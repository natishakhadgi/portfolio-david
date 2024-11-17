import { Box, List, ListItem, Typography } from "@mui/material";
import { PROJ_MAN, SOFTWARE } from "../assets/constants";
import { StyledBox } from "../components/StyledBox";

const listMargin = '20px';

export const SubHero = (() => {
  return (
    <Box display={'grid'} gridTemplateColumns="repeat(auto-fill, minmax(300px, auto))" gap='60px' justifyItems={'center'} sx={{px: '20px'}}>
      <StyledBox width='100%'>
        <Typography variant="h1">Project Experience</Typography>
        <List sx={{ listStyleType: 'disc', ml: listMargin }}>
          {
            PROJ_MAN.map(bullet => {
              return <ListItem sx={{ display: 'list-item', pt: 0, pb: '5px' }} key={`project_experience::${bullet}`}>
                  <Typography variant='bullet'>{bullet}</Typography>
                </ListItem>
            })
          }
        </List>
      </StyledBox>
      <StyledBox width='100%'>
        <Typography variant="h1">Software</Typography>
        <List sx={{ listStyleType: 'disc', ml: listMargin }}>
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