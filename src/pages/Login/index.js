import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as AuthActions } from '~/store/ducks/auth';

import { ActivityIndicator } from 'react-native';


import { Button } from '~/components';
import LogoImage from '~/assets/images/logo.png';
import { colors } from '~/assets/styles';

import { Container, Box, Logo, Form, FormInput } from './styles';

function Login() {
  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth);

  const [signUp, setSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    setLoading(auth.login.loading || auth.register.loading);
  }, [auth]);

  function handleSubmit() {
    signUp ? dispatch(AuthActions.signUpRequest(data)) : dispatch(AuthActions.loginRequest({
      email: data.email,
      password: data.password,
    }))
  }

  function handleChangeInput(name, value) {
    setData({
      ...data,
      [name]: value,
    });
  }

  return (
    <Container>
      <Box>
        <Logo source={LogoImage} />

        <Form>
          {signUp &&
          <FormInput
            placeholder="Usuário"
            value={data.username}
            onChangeText={value => handleChangeInput('username', value)}
          />}

          <FormInput
            autoCapitalize="none"
            placeholder="E-mail"
            value={data.email}
            onChangeText={value => handleChangeInput('email', value)}
          />

          <FormInput
            secureTextEntry
            placeholder="Senha"
            value={data.password}
            onChangeText={value => handleChangeInput('password', value)}
          />

          <Button onPress={() => handleSubmit()}>
            {loading ? (
              <ActivityIndicator size="small" color={colors.white} />
            ) : signUp ? 'Cadastrar' : 'Login'}
          </Button>

          <Button outline onPress={() => setSignUp(!signUp)}>
            {signUp ? 'Login' : 'Cadastre-se'}
          </Button>
        </Form>
      </Box>
    </Container>
  )
}

export default Login;
