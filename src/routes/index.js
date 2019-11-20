import React, {useEffect, useState} from 'react';

import {Router, Stack, Scene} from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';

import * as Pages from '~/pages';

import {colors} from '~/assets/styles';

import styles from './styles';

function Routes() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    getLogged();
  }, []);

  async function getLogged() {
    const token = await AsyncStorage.getItem('auth_token');

    setLogged(token !== null);
  }

  return (
    <Router>
      <Stack key="root" navigationBarStyle={styles.navigationBar}>
        {/* Scenes */}
        <Scene
          key="login"
          component={Pages.Login}
          initial={!logged}
          hideNavBar
        />

        <Scene
          back={false}
          key="home"
          component={Pages.Home}
          initial={logged}
          navigationBarStyle={{
            backgroundColor: colors.primary,
          }}
          title="Meus questionários"
          titleStyle={{color: colors.white}}
        />

        <Scene
          key="questionary"
          title="Responder Questionário"
          backTitle="Voltar"
          component={Pages.Questionaries.Detail}
          navigationBarStyle={{
            backgroundColor: colors.primary,
          }}
          titleStyle={{color: colors.white}}
          backButtonTextStyle={{color: colors.white}}
          backButtonTintColor={colors.white}
        />
      </Stack>
    </Router>
  );
}

export default Routes;
