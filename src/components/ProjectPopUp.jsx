
import { Button, Box, Dialog, DialogTitle, Typography } from "@mui/material";
import youtubeLogo from '../assets/images/links/YouTube-Logo.png';
import itchLogo from '../assets/images/links/itch.png';
import steamLogo from '../assets/images/links/steam.png';
import kickStarterLogo from '../assets/images/links/kickstarter.png';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const getLinkImg = (type => {
  if (type === 'youtube') return youtubeLogo;
  else if (type === 'itch') return itchLogo;
  else if (type === 'kickstarter') return kickStarterLogo;
  else return steamLogo;
});

const StyledCarousel = ({proj}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  
  return (
    <Box sx={{ width: { xs: '80vw', sm: '65vw', lg: '55vw' }, height: 'auto', position:'relative' }}>
    <Carousel
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      showDots={true}
      infinite={true}
      customTransition="transform 250ms ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      renderDotsOutside={true}
    >
      {proj?.images?.map((img, idx) => {
        return <img
          src={`${img}`}
          key={`${proj.title}::img::${idx}`}
          width={'100%'}
          height={'auto'}
        />
      })}
    </Carousel>
  </Box>
  )
};

export const ProjectPopUp = ({ proj, openDialog, setOpenDialog }) => {
  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Dialog onClose={handleClose} open={openDialog} fullWidth={true} maxWidth={'xl'} id='popup'>
      <Box id='popup_box' sx={{
        height: {xs: '95vh', sm: '85vh'},
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: 'white',
        position: 'relative',
        justifyContent: 'space-between'
      }}>
        <DialogTitle><Typography variant='title1'>{proj.title}</Typography></DialogTitle>

       <StyledCarousel proj={proj}/>
        <Box sx={{ width: { xs: '80vw', sm: '65vw', lg: '55vw', overflow: 'scroll' }, mt: '30px' }}>
          <Typography variant='body3'>{proj.desc}</Typography>
        </Box>
        <Box 
          display={'grid'} 
          gridTemplateColumns="auto auto auto" 
          gap='10px' 
          justifyItems={'center'}
          // sx={{
          //   position: 'absolute',
          //   bottom: 0
          // }}
        >
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