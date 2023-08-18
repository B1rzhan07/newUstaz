/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import TelegramIcon from '@mui/icons-material/Telegram';
import { Button, Paper, Typography, styled } from '@mui/material';

function Telegram() {
  return (
    <Paper
      sx={{
        marginBottom: 3,
        padding: 3,
      }}
    >
      <TypographyHeadingStyle>Дәл қазір тіркел!</TypographyHeadingStyle>

      <TypographySubHeadingStyle>
        Сұрактар болса, осы телеграм каналына жазыңыз:{' '}
        <Button
          onClick={() => {
            window.open('https://t.me/almaty_ustazy_support');
          }}
          variant="contained"
        >
          Telegram <TelegramIcon />
        </Button>
      </TypographySubHeadingStyle>
    </Paper>
  );
}

export default Telegram;

const TypographySubHeadingStyle = styled(Typography)(({ theme }) => ({
  fontSize: 15,
  textAlign: 'center',
  lineHeight: '25px',
  overflow: 'hidden',
  color: theme.palette.common.black,
  [theme.breakpoints.up(730)]: {
    displayL: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 21,
    lineHeight: '22px',
    width: '100%',
    fontWeight: 'bold',
    marginTop: theme.spacing(3),
  },
}));

const TypographyHeadingStyle = styled(Typography)(({ theme }) => ({
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
