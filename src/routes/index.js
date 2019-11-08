import React from "react";

import { Router, Stack, Scene } from "react-native-router-flux";

import * as Pages from "../pages";

import styles from "./styles";

const Routes = () => (
  <Router>
    <Stack key="root" navigationBarStyle={styles.navigationBar}>
      {/* Scenes */}
      <Scene key="login" component={Pages.Login} initial hideNavBar />
      <Scene key="main" component={Pages.Main}  hideNavBar />
    </Stack>
  </Router>
);

export default Routes;
