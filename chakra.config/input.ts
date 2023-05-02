const Input = {
  baseStyle: { borderRadius: 0 },
  variants: {
    filled: {
      field: {
        borderRadius: 'xl',
        borderWeight: '1px',
        border: '1px solid',
        borderColor: 'gray.200',
        backgroundColor: '#fff',
        borderStyle: 'solid',
        _placeholder: { color: 'gray.400', fontSize: '1rem' },
        ':hover': {
          background: 'gray.100',
        },
      },
    },
    outline: {
      field: {
        padding: '0.625rem',
        background: '#fff',
        backgroundColor: '#fff',
        border: '1px solid #F1F5F9',
        borderWeight: '1px',
        borderColor: 'gray.200',
        borderStyle: 'solid',
        borderRadius: 'xl',
        fontWeight: '400',
        fontSize: '14px',
        _placeholder: { color: '#94A3B8' },
      },
    },

  },
  Select: {
    baseStyle: {
      padding: '1.5rem 0',
      borderWidth: '1px',
      borderColor: '#000000',
      borderRadius: '12px',
      paddingY: '1.3rem',
      _placeholder: { color: 'black' },
    },
  },
  FormErrorMessage: {
    baseStyle: {
      color: 'red.500',
    },
  },
};
export default Input;
