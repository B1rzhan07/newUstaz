import React from 'react';

import { AppBar, Box, Toolbar, Typography, styled, Button, Container, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import main from '~/assets/Img/index.png';
import { RoutePath } from '~/config/routeConfig/routeConfig';
import { logout } from '~/feautures/auth/authSlice';
import TabsComponent from '~/shared/components/Tabs';
import { useAppDispatch, useAppSelector } from '~/store';

import { getIsLogin } from './getIsLogin';
import { getUser } from './getUser';

const Logo = styled('img')(({ theme }) => ({
  height: theme.spacing(6),
  marginRight: theme.spacing(1),
}));

function Navbar() {
  const { t } = useTranslation();

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
      <Paper>
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
                    {t('main')}
                  </Link>
                </TypographyStyle>
                <TypographyStyle>О нас</TypographyStyle>
                <TypographyStyle>Политика конфеденциальности</TypographyStyle>
              </ContainerStyle>
            </BoxStyle>
            <TabsComponent />
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
      </Paper>
    </Box>
  );
}
export default React.memo(Navbar);

const AppBarStyle = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: 'none',
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
