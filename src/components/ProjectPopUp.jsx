
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Dialog, DialogTitle, Typography } from "@mui/material";

export const ProjectPopUp = ({proj, openDialog, setOpenDialog}) => {

  const handleClose = () => {
    setOpenDialog(false);
  };

  const sliderSettings = {
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    // centerMode: true, // use for mobile preview
  };

  return (
    <Dialog onClose={handleClose} open={openDialog} fullWidth={true} maxWidth={'xl'} id='popup'>
      <Box id='popup_box' sx={{height:'80vh', display:'flex', flexDirection: 'column', alignItems: 'center', gap:'10px', bgcolor:'white'}}>
        <DialogTitle>{proj.title}</DialogTitle>
        <Box sx={{width: '80vw'}}>
          <Slider {...sliderSettings}>
            {
              proj.images.map(img => {
                return <img src={`${img}`}/>
              })
            }
          </Slider>   
          <Typography variant='body2' sx={{mt:'30px'}}>{proj.desc}</Typography>
        </Box>
        {/* map links */}
      </Box>
    </Dialog>
  );
};
