import React from 'react';

import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Foundation';

import {colors} from '~/assets/styles';

import {Container, Info, Title, Description} from './styles';

function QuestionaryItem(props) {
  const {data} = props;

  return (
    <Container onPress={() => Actions.questionary({id: data.id})}>
      <Icon size={45} name="clipboard-pencil" color={colors.darkGray} />

      <Info>
        <Title>{data.title}</Title>
        <Description>{data.description}</Description>
      </Info>
    </Container>
  );
}

export default QuestionaryItem;
