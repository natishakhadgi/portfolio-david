import { useState } from 'react';
import { Box, Button, Dialog, Typography } from "@mui/material";
import { ProjectPopUp } from './ProjectPopUp';

export const ProjectCard = ({proj}) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Box
      sx={{
        borderRadius: '10px',
        // backgroundColor: '#ffffff66',
        backgroundColor: 'lightblue',

        boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.25)',
        width: '100%',
        maxWidth: '500px',
        padding: {xs: '10px', lg: '16px'}
      }}
    >
      <img 
        src={`${proj.images[0]}`} 
        style={{
          width:'auto', 
          maxHeight: '180px'
        }}
      />
      <Typography>{proj.title}</Typography>
      <Button variant="contained" onClick={() => setOpenDialog(true)}>More Info</Button>
      <ProjectPopUp proj={proj} openDialog={openDialog} setOpenDialog={setOpenDialog}/>
    </Box>
  );
};
