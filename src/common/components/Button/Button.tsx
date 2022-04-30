import { styled } from '../../../../stitches.config';

const Button = styled('button', {
  backgroundColor: '$gray400',
  borderRadius: '9999px',
  fontSize: '13px',
  px: '15px',
  py: '12px',
  '&:hover': {
    backgroundColor: '$gray500',
  },
  variants: {
    color: {
      purple: {
        color: 'white',
        backgroundColor: 'purple',
        '&:hover': {
          backgroundColor: 'MediumPurple',
        },
      },
    },
    size: {
      large: {
        px: '24px',
        py: '20px',
      },
    },
  },
});

export default Button;
