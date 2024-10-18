import { Box, Typography } from "@mui/material";

export const ExperienceCard = ({exp}) => {
  return (
    <Box
      sx={{
        borderRadius: '10px',
        // backgroundColor: '#ffffff66',
        backgroundColor: 'lightblue',

        boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.25)',
        width: '100%',
        maxWidth: '350px'
      }}
    >
      {/* check border */}
      <img src={`${exp.banner}`} style={{width:'100%', borderRadius: '10px 10px 0 0'}}/>
      <img src={`${exp.logo}`} style={{width:'95px', borderRadius: '50%'}}/>
      <Typography>{exp.title}</Typography>
      {
        exp.roles.map(role => {
          return (
            <Box>
              <Typography>{role.role}</Typography>
              <Typography>{role.dates}</Typography>
            </Box>
          )
        })
      }
    </Box>
  );
};
