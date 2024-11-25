import { Box } from "@mui/material";

export const StyledBox = (props) => {
  return (
    <Box
      sx={{
        borderRadius: '1rem',
        backgroundColor: '#ffffff66',
        boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.05)',
        padding: props.padding || '20px',
        width: props.width || 'auto',
        ...props.sx
      }}
    >
      {props?.children}
    </Box>
  );
};
