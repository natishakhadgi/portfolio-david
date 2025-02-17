
import { Button, Box, Dialog, DialogTitle, Typography } from "@mui/material";
import youtubeLogo from '../assets/images/links/YouTube-Logo.png';
import itchLogo from '../assets/images/links/itch.png';
import steamLogo from '../assets/images/links/steam.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  arrows: true,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  // centerMode: true, // use for mobile preview
};

const getLinkImg = (type => {
  if (type === 'youtube') return youtubeLogo;
  else if (type === 'itch') return itchLogo;
  else return steamLogo;
});

export const ProjectPopUp = ({proj, openDialog, setOpenDialog}) => {
  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Dialog onClose={handleClose} open={openDialog} fullWidth={true} maxWidth={'xl'} id='popup'>
      <Box id='popup_box' sx={{
        height:'85vh', 
        display:'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        bgcolor:'white',
        position: 'relative'
      }}>
        <DialogTitle><Typography variant='title1'>{proj.title}</Typography></DialogTitle>
        <Box sx={{width: '70vw'}}>
          <Slider {...sliderSettings}>
            {
              proj?.images?.map((img, idx) => {
                return <img src={`${img}`} key={`${proj.title}::img::${idx}`}/>
              })
            }
          </Slider>   
        </Box>
        <Box sx={{width: '70vw', mt: '30px'}}>
          <Typography variant='body3'>{proj.desc}</Typography>
        </Box>
        <Box display={'grid'} gridTemplateColumns="auto auto auto" gap='10px' justifyItems={'center'} position='absolute' bottom={'20px'}>
        {
          proj?.links?.map((link) => {
            return (
              <Button target="_blank" href={link.url}>
                <img 
                src={getLinkImg(link?.type)} 
                key={`${proj.title}::${link?.type}::link`} 
                height='45px'
              />
              </Button>
            )
          })
        }
        </Box>
      </Box>
    </Dialog>
  );
};