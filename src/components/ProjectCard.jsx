import { useState } from 'react';
import { Box, Button, Typography } from "@mui/material";
import { ProjectPopUp } from './ProjectPopUp';
import { onHoverEnlarge } from '../assets/styles';

export const ProjectCard = ({proj}) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Box
      sx={{
        borderRadius: '10px',
        backgroundColor: 'rgba(225, 225, 225, 0.1)',
        boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.25)',
        padding: {xs: '10px', lg: '16px'},
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: {xs: '340px', xxl: '400px'},
        ...onHoverEnlarge
      }}
    >
      <div>
        <Box 
          onClick={() => setOpenDialog(true)}
          sx={{'&:hover': {cursor: 'pointer'}}}
        >
          <Box 
           component="img"
           src={`${proj?.images && proj?.images[0]}`} 
           sx={{
             height: {xs: '180px', xxl: '220px'},
             width:'100%', 
             borderRadius: '10px',
             objectFit:'cover'
           }}
           />
        </Box>
        <Typography variant='title2'>{proj.title}</Typography>
      </div>
      <div>
        <Button variant="contained" onClick={() => setOpenDialog(true)}>More Info</Button>
      </div>
     
      <ProjectPopUp proj={proj} openDialog={openDialog} setOpenDialog={setOpenDialog}/>
    </Box>
  );
};
