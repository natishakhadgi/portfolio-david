import { Box, Typography } from "@mui/material";
import { MOCK_EXPERIENCE } from "../../assets/experience";
import { ExperienceCard } from "../ExperienceCard";

export const Experience = (() => {
  return (
    <Box>
      <Typography variant='h1'>Experience</Typography>
      <Box sx={{display: 'grid', gridTemplateColumns: "repeat(auto-fill, minmax(275px, 1fr) )", gap: "10px"}}>
      {
        MOCK_EXPERIENCE.map(exp => {
          return <ExperienceCard exp={exp}/>
        })
      }
      </Box>
    </Box>
  );
});