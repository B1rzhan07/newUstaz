import React from 'react';

import { Box, Container, styled } from '@mui/material';

import { Navbar } from '~/widgets/Navbar';

type Props = {
  children?: React.ReactElement;
};

export default function HomePageLayout({ children }: Props) {
  return (
    <BoxStyle>
      <Navbar />
      <MainStyle>{children}</MainStyle>
    </BoxStyle>
  );
}
const BoxStyle = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
});

const MainStyle = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'collapseClick',
})({
  flexGrow: 1,
});
