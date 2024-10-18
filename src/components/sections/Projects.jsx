import { Box, Typography } from "@mui/material";
import { PROJECTS } from "../../assets/projects";
import { ProjectCard } from "../ProjectCard";

export const Projects = (() => {
  return (
    <Box>
      <Typography variant='h1'>Projects</Typography>
      <Box sx={{display: 'grid', gridTemplateColumns: "repeat(auto-fit, minmax(250px, 400px))", gap: "10px"}}>
      {
        PROJECTS.map(proj => {
          return <ProjectCard proj={proj}/>
        })
      }
      </Box>
      
    </Box>
  );
});