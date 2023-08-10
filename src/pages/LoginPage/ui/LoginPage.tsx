import React from 'react';

import { Box, styled } from '@mui/material';

import main from '~/assets/Img/alma.jpg';
import HomePageLayout from '~/pages/MainPage/ui/HomePage';
import { Page } from '~/shared/Page';
import { LoginForm } from '~/widgets/LoginForm';

export function LoginPage() {
  return (
    <HomePageLayout>
      <Page title="Login Page">
        <BoxContainerStyle>
          <BoxStyle>
            <LoginForm />
          </BoxStyle>
          <Box sx={{ alignSelf: 'center' }}>
            <ImageStyle src={main} alt="details" />
          </Box>
        </BoxContainerStyle>
      </Page>
    </HomePageLayout>
  );
}

const BoxContainerStyle = styled(Box)(({ theme }) => ({
  display: 'grid',
  position: 'relative',
  width: '100%',
  justifyContent: 'center',
  gridTemplateColumns: 'repeat(2, 1fr)',
  paddingTop: theme.spacing(10),
  gap: theme.spacing(4),
  [theme.breakpoints.down(670)]: {
    display: 'flex',
    flexDirection: 'column-reverse',
    paddingTop: theme.spacing(6),
    gap: theme.spacing(2),
  },
}));

const BoxStyle = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ImageStyle = styled('img')(({ theme }) => ({
  height: 540,
  objectFit: 'contain',
  [theme.breakpoints.down('sm')]: {
    height: 358,
  },
  [theme.breakpoints.between(720, 950)]: {
    height: 430,
  },
  [theme.breakpoints.between(670, 720)]: {
    height: 380,
  },
}));
