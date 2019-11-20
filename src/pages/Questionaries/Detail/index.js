import React from 'react';

import {Page} from '~/components';
import {colors} from '~/assets/styles';

import {
  Container,
  Question,
  QuestionText,
  Options,
  Option,
  OptionText,
} from './styles';

function Detail(props) {
  return (
    <Page color={colors.primary}>
      <Container>
        <Question>
          <QuestionText>
            Aqui vai todo o texto da pergunta lalalal al lasl dasl ldsal
          </QuestionText>
        </Question>

        <Options>
          <Option>
            <OptionText>OptionTexto</OptionText>
          </Option>
          <Option>
            <OptionText>OptionTexto</OptionText>
          </Option>
          <Option>
            <OptionText>OptionTexto</OptionText>
          </Option>
          <Option>
            <OptionText>OptionTexto</OptionText>
          </Option>
          <Option>
            <OptionText>OptionTexto</OptionText>
          </Option>
        </Options>
      </Container>
    </Page>
  );
}

export default Detail;
