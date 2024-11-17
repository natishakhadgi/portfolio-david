import { Box, Typography } from "@mui/material";

export const SectionTitle = ({title}) => {
  return (
    <Box sx={{marginBottom: '20px'}}>
      <Typography variant='h1' sx={{px:'10px'}}>{title}</Typography>
    </Box>
  );
};