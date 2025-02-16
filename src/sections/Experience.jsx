import { Box } from "@mui/material";
import { EXPERIENCE } from "../assets/experience";
import { ExperienceCard } from "../components/ExperienceCard";
import { SectionTitle } from "../components/SectionTitle";

export const Experience = (() => {
  return (
    <Box>
      <SectionTitle title='Experience' />
      <Box sx={{
        display: 'flex',
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: "10px",
      }}>
        {
          EXPERIENCE.map(exp => {
            return <ExperienceCard exp={exp} key={exp.title} />
          })
        }
      </Box>
    </Box>
  );
});