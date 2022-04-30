import { styled } from '@stitches/react';

const Button = styled('button', {
  backgroundColor: 'coral',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
});

export default Button;
