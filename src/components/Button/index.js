import React from 'react';

import { Container, Label } from './styles';

function Button(props) {
  const { children } = props;

  return (
  <Container {...props}>
    <Label {...props}>
      {children}
    </Label>
  </Container>
  )
}

export default Button;
