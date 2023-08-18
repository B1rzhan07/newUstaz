/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import { Box, Button, Typography, styled } from '@mui/material';

function Footer() {
  return (
    <Box>
      <TypographyHeadingStyle>Байланыс деректері</TypographyHeadingStyle>
      <TypographySubHeadingStyle>
        Сұрактар болса, осы телеграм каналына жазыңыз: {'  '}
        <Button
          sx={{
            backgroundColor: '#229ED9',
          }}
          onClick={() => {
            window.open('https://t.me/almaty_ustazy_support');
          }}
          variant="outlined"
        >
          Telegram
        </Button>
        <Button
          sx={{
            marginLeft: 2,
            backgroundColor: '#FF0000',
          }}
          onClick={() => {
            window.open('https://www.youtube.com/@almatyustazy594');
          }}
          variant="outlined"
        >
          Youtube
        </Button>
      </TypographySubHeadingStyle>
      <Typography
        sx={{
          marginTop: 3,
          textAlign: 'center',
          fontSize: 15,
          marginBottom: 3,
        }}
      >
        © 2023, Almaty Ustazy. Барлық құқықтар сақталған.
      </Typography>
    </Box>
  );
}

export default Footer;

const TypographyHeadingStyle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3),
  fontSize: 24,
  lineHeight: '30px',
  overflow: 'hidden',
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
}));

const TypographySubHeadingStyle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3),
  fontSize: 18,
  textAlign: 'left',
  overflow: 'hidden',
  color: theme.palette.common.black,
  marginBottom: theme.spacing(3),
  [theme.breakpoints.up(730)]: {
    textDecoration: '',
    fontSize: 20,
    textAlign: 'left',
  },
}));
