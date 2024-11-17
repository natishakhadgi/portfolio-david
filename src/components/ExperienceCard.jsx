import { Box, Typography } from "@mui/material";
import { onHoverShadow } from "../assets/styles";

export const ExperienceCard = ({ exp }) => {
  return (
    <Box
      sx={{
        borderRadius: '10px',
        backgroundColor: 'rgba(225, 225, 225, 0.1)',
        boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.25)',
        width: '100%',
        maxWidth: '350px',
        paddingBottom: '30px',
        ...onHoverShadow
      }}
    >
      {/* check border */}
      <Box sx={{ display: 'grid', position: 'relative' }} marginBottom='65px'>
        <img src={`${exp.banner}`} style={{ width: '100%', borderRadius: '10px 10px 0 0' }} />
         <img
          src={`${exp.logo}`}
          style={{
            width: '95px',
            borderRadius: '50%',
            // Center image
            position: 'absolute',
            top: '110%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        /> 
      </Box>

      <Typography variant="title1">{exp.title}</Typography>
      {
        exp.roles.map(role => {
          return (
            <Box sx={{ marginTop: '15px' }} key={`${exp.title}::${role.role}`}>
              <Typography variant="title2">{role.role}</Typography>
              <Typography variant='body2'>{role.date}</Typography>
            </Box>
          )
        })
      }
    </Box>
  );
};