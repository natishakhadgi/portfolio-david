import { Box, Typography } from "@mui/material";
import { EXPERIENCE } from "../../assets/experience";
import { ExperienceCard } from "../ExperienceCard";

export const Experience = (() => {
  return (
    <Box>
      <Typography variant='h1'>Experience</Typography>
      {
        EXPERIENCE.map(exp => {
          return <ExperienceCard exp={exp}/>
        })
      }
    </Box>
  );
});