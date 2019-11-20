import React from 'react';
import {colors} from '~/assets/styles';

import {StatusBar} from 'react-native';

import {Container} from './styles';

function Page(props) {
  const {children, statusBarColor, statusBarStyle} = props;

  return (
    <Container {...props}>
      <StatusBar backgroundColor={statusBarColor} barStyle={statusBarStyle} />
      {children}
    </Container>
  );
}

Page.defaultProps = {
  statusBarStyle: 'light-content',
  statusBarColor: colors.white,
};

export default Page;
