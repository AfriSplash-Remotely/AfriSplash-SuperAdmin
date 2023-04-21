const Button = {
  // 1. We can update the base styles
  baseStyle: {
    fontFamily: `'Inter', sans-serif`,
    fontWeight: '500',
    fontSize: 'md',
    bg: 'primary',
    backgroundColor: 'primary',
    borderRadius: 'xl',
    color: 'white',
    letterSpacing: '0.16px',
    padding: '0.75rem', // 12px

  },
  // 2. We can add a new button size or extend existing
  sizes: {
    md: {
      h: '45.67px',
      fontSize: 'lg',
    },
    lg: {
      h: '50px',
      fontSize: '2xl',
    },
  },
  // 3. We can add a new visual variant
  variants: {
    primary: {
      backgroundColor: '#fff',
      color: 'primary',
      ':hover': {
        background: 'primaryLight',
      },
    },
    secondary: {
      backgroundColor: '#1C1D36',
      color: 'white',
      ':hover': {
        background: 'white',
        color: '#1C1D36',
        border: "1px solid #1C1D36"
      },
    },
  },
};

export default Button;
