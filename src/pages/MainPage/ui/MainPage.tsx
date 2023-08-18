/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import { Page } from '~/shared/Page';
import { Come, Footer, Invite, Stages, Telegram } from '~/widgets/components';

import HomePageLayout from './HomePage';

function MainPage() {
  return (
    <HomePageLayout>
      <Page title="Main">
        <Come />
        <Telegram />
        <Stages />
        <Invite />
        <Footer />
      </Page>
    </HomePageLayout>
  );
}

export default MainPage;
