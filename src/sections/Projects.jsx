import { Box, Typography } from "@mui/material";
import { PROJECTS } from "../assets/projects";
import { ProjectCard } from "../components/ProjectCard";
import { SectionTitle } from "../components/SectionTitle";

export const Projects = (() => {
  return (
    <Box>
      <SectionTitle title='Projects'/>
      <Box sx={{display: 'grid', gridTemplateColumns: "repeat(auto-fill, minmax(275px, 1fr) )", gap: "10px"}}>
      {
        // TODO: key={proj.title} (use after David updates assets)
        PROJECTS.map(proj => {
          return <ProjectCard proj={proj}/>
        })
      }
      </Box>
    </Box>
  );
});