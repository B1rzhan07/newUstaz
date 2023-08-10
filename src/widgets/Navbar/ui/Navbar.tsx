import React from 'react';

import { AppBar, Box, Toolbar, Typography, styled, Button, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import main from '~/assets/Img/index.png';
import { RoutePath } from '~/config/routeConfig/routeConfig';
import { logout } from '~/feautures/auth/authSlice';
import { useAppDispatch, useAppSelector } from '~/store';

import { getIsLogin } from './getIsLogin';
import { getUser } from './getUser';

const Logo = styled('img')(({ theme }) => ({
  height: theme.spacing(6),
  marginRight: theme.spacing(1),
}));

function Navbar() {
  const isLogged = useAppSelector(getIsLogin);
  const user = useAppSelector(getUser);
  console.log(user);

  console.log(isLogged);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBarStyle position="static" elevation={0}>
        <Toolbar>
          <Logo src={main} alt="logo" />
          <TypographyStyle variant="h6">Almaty Ustazy</TypographyStyle>
          <BoxStyle
            sx={{
              flexGrow: 1,
            }}
          >
            <ContainerStyle>
              <TypographyStyle>
                <Link
                  style={{
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                  to={RoutePath.main}
                >
                  Басты бет
                </Link>
              </TypographyStyle>
              <TypographyStyle>О нас</TypographyStyle>
              <TypographyStyle>Контакты</TypographyStyle>
            </ContainerStyle>
          </BoxStyle>
          {!isLogged && (
            <Button onClick={() => navigate(RoutePath.login)} color="primary" variant="contained">
              Login
            </Button>
          )}
          {isLogged && (
            <Button onClick={() => dispatch(logout())} color="primary" variant="contained">
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBarStyle>
    </Box>
  );
}
export default React.memo(Navbar);

const AppBarStyle = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.neutral,
  color: theme.palette.text.primary,
}));

const TypographyStyle = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(1),
}));

const BoxStyle = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: theme.spacing(5),
}));

const ContainerStyle = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: theme.spacing(2),
  gap: theme.spacing(2),
  [theme.breakpoints.down(730)]: {
    display: 'none',
  },
}));
