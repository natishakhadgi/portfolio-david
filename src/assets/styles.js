export const onHoverShadow = {
  transition: '0.5s ease',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.5)',
    boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.2)'
  }
};

export const onHoverEnlarge = {
  transition: '0.5s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: 'rgba(243, 243, 243, 1)'
  }
};