import { Box, Typography } from "@mui/material";
import { EXPERIENCE } from "../../assets/experience";
import { ExperienceCard } from "../ExperienceCard";

export const Experience = (() => {
  return (
    <Box>
      <Typography variant='h1'>Experience</Typography>
      <Box sx={{display: 'grid', gridTemplateColumns: "repeat(auto-fill, minmax(275px, 1fr) )", gap: "10px"}}>
      {
        EXPERIENCE.map(exp => {
          return <ExperienceCard exp={exp}/>
        })
      }
      </Box>
    </Box>
  );
});