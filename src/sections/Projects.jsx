import { Box, Typography } from "@mui/material";
import { PROJECTS } from "../assets/projects";
import { ProjectCard } from "../components/ProjectCard";
import { SectionTitle } from "../components/SectionTitle";

export const Projects = (() => {
  return (
    <section id='projects'>
 <Box  >
      <SectionTitle title='Projects'/>
      <Box sx={{display: 'grid', gridTemplateColumns: "repeat(auto-fill, minmax(275px, 1fr) )", gap: "10px"}}>
      {
        PROJECTS.map(proj => {
          return <ProjectCard proj={proj} key={proj?.title}/>
        })
      }
      </Box>
    </Box>
    </section>
   
  );
});