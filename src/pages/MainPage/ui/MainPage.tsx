import React from 'react';

import { Box, styled } from '@mui/material';

import { Page } from '~/shared/Page';

import HomePageLayout from './HomePage';

function MainPage() {
  return (
    <HomePageLayout>
      <Page title="Main">
        <BoxContainerStyle>fwefew</BoxContainerStyle>
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
