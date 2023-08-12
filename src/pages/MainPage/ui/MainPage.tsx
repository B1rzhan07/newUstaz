import React from 'react';

import { Box, Button, Typography, styled } from '@mui/material';

import main from '~/assets/Img/kaz.png';
import { Page } from '~/shared/Page';

import HomePageLayout from './HomePage';

function MainPage() {
  return (
    <HomePageLayout>
      <Page title="Main">
        <BoxContainerStyle>
          <BoxStyle>
            <TypographyHeadingStyle>Жаспын, жас та болсам баспын!</TypographyHeadingStyle>
            <TypographySubHeadingStyle>
              «Алматы Ұстазы - 2023» жас мұғалімдердің кәсіби байқауына шақырамыз!
            </TypographySubHeadingStyle>
            <Button
              sx={{
                marginTop: 4,
              }}
              variant="contained"
              size="large"
            >
              Байқауға қатысу
            </Button>
          </BoxStyle>
          <BoxImageStyle>
            <ImageStyle src={main} alt="main" />
          </BoxImageStyle>
        </BoxContainerStyle>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            columnDirection: 'column',
          }}
        >
          <TypographySubHeadingStyle>Дәл қазір тіркел!</TypographySubHeadingStyle>
          <Typography>Сұрактар болса, осы телеграм каналына жазыңыз:</Typography>
        </Box>
      </Page>
    </HomePageLayout>
  );
}

export default MainPage;

const BoxContainerStyle = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(5),
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(1),
  [theme.breakpoints.down(730)]: {
    display: 'flex',
    flexDirection: 'column-reverse',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    gap: 0,
  },
}));

const TypographyHeadingStyle = styled(Typography)(({ theme }) => ({
  fontSize: 40,
  lineHeight: '52px',
  textAlign: 'center',
  overflow: 'hidden',
  color: theme.palette.common.black,
  [theme.breakpoints.up(730)]: {
    fontSize: 48,
    fontWeight: 'bold',
    lineHeight: '64px',
    marginTop: theme.spacing(10),
    textAlign: 'left',
  },
}));
const TypographySubHeadingStyle = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  lineHeight: '25px',
  textAlign: 'center',
  overflow: 'hidden',
  color: theme.palette.common.black,
  [theme.breakpoints.up(730)]: {
    fontSize: 25,
    fontWeight: 'bold',
    lineHeight: '32px',
    marginTop: theme.spacing(7),
    textAlign: 'left',
  },
}));

const BoxStyle = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down(730)]: {
    textAlign: 'center',
  },
}));

const ImageStyle = styled('img')(({ theme }) => ({
  height: 530,
  objectFit: 'contain',
  width: '100%',
  [theme.breakpoints.between('sm', 730)]: {
    height: 420,
  },
  [theme.breakpoints.down('sm')]: {
    height: 362,
  },
}));

const BoxImageStyle = styled(Box)({
  alignSelf: 'center',
});
