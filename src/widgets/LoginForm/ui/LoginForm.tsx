import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Stack, Alert, Typography, styled, Card } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import authApi from '~/api/auth/api';
import { FormProvider } from '~/app/providers/Form';
import { setUser } from '~/feautures/auth/authSlice';
import { useAppDispatch } from '~/store';
import { RHFTextField } from '~/widgets/TextField/RHFTextField';

type FormValuesProps = {
  username: string;
  password: string;
  afterSubmit?: string;
};

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const defaultValues = {
  username: '',
  password: '',
};

export function LoginForm() {
  const [login] = authApi.endpoints.login.useMutation();
  const navigate = useNavigate();
  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;
  const dispatch = useAppDispatch();
  const onSubmit = async (data: FormValuesProps) => {
    try {
      const response = await login(data).unwrap();
      dispatch(setUser(response));
      navigate('/');
    } catch (error: unknown) {
      setError('username', { message: 'Wrong credentials', type: 'custom' });
      setError('password', { message: 'Wrong credentials', type: 'custom' });
    }
  };
  return (
    <CardContainerStyle>
      <TypographyStyle variant="body2">Укажите необходимые данные</TypographyStyle>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

          <RHFTextField name="username" label="Электронная почта" />

          <RHFTextField name="password" label="Пароль" type="password" />
        </Stack>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          sx={{ mt: 2 }}
        >
          Войти
        </LoadingButton>
      </FormProvider>
    </CardContainerStyle>
  );
}

const CardContainerStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(1),
}));

const TypographyStyle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  color: theme.palette.grey[600],
}));
