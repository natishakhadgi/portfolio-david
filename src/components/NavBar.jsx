import { useState } from "react";
import '../App.css'
import { Link, animateScroll as scroll } from 'react-scroll';
import { Button, Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { StyledBox } from "../components/StyledBox";
import { NAV } from "../assets/constants";

export const NavBar = (() => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [activeSection, setActiveSection] = useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSetActiveLink = (page) => {
    console.log('activeSection::',activeSection)
    console.log('to section::', page?.link)
    setActiveSection(page?.link);
  };


  return (
    <StyledBox
      sx={{
        position: 'sticky',
        top: '20px',
        width: '90vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px',
        gap: 2,
        background: 'rgba(255, 255, 255, 0.5)',
        boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.05)',
        backdropFilter: 'blur(1rem)',
        border: '1px solid rgba(255, 255, 255, 0.25)',
        zIndex: 100
      }}
    >
      <Typography variant="h2" noWrap component="a" href="#app-bar-with-responsive-menu"
        sx={{
          mr: 2,
          display: 'flex',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        David Koster
      </Typography>

      <Box sx={{ width: 'auto', display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          {NAV.map((page) => (
            <MenuItem
              key={page.name}
              onClick={handleCloseNavMenu}
            >
              <Link
                to={page?.link}
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
                className={activeSection === page?.link ? 'active' : ''}
                // onClick={() => handleSectionClick(page)}
              >
                {page.name}
              </Link>
              {/* <Typography variant='navItem' sx={{ textAlign: 'center' }}></Typography> */}
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '10px' }}>
        {NAV.map((page) => (
          <Link
            class='navLink'
            to={page?.link}
            smooth={true}
            duration={300}
            activeClass="active"
            spy={true}
            offset={page?.link == 'certificates' ? -100 : -350}
            onClick={() => handleSetActiveLink(page)}
          >
          <Typography variant='navItem' sx={{ textAlign: 'center' }}>{page.name}</Typography>
        </Link>
        ))}
      </Box>
    </StyledBox>
  );
});