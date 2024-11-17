import { Box } from "@mui/material";
import { MOCK_EXPERIENCE } from "../assets/experience";
import { ExperienceCard } from "../components/ExperienceCard";
import { SectionTitle } from "../components/SectionTitle";

export const Experience = (() => {
  return (
    <Box>
      <SectionTitle title='Experience'/>
      <Box sx={{display: 'grid', gridTemplateColumns: "repeat(auto-fill, minmax(275px, 1fr) )", gap: "10px"}}>
      {
        MOCK_EXPERIENCE.map(exp => {
          return <ExperienceCard exp={exp} key={exp.title}/>
        })
      }
      </Box>
    </Box>
  );
});