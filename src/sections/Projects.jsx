import { Box } from "@mui/material";
import { PROJECTS } from "../assets/projects";
import { ProjectCard } from "../components/ProjectCard";
import { SectionTitle } from "../components/SectionTitle";

export const Projects = (() => {
  return (
    <section id='projects'>
 <Box>
      <SectionTitle title='Projects'/>
      <Box sx={{
        display: 'flex', 
        flexDirection: "row", 
        flexWrap: 'wrap',
        justifyContent:'center', 
        gap: "10px",
      }}>
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