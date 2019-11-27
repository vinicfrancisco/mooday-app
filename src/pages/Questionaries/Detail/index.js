import React, {useState, useEffect} from 'react';
import {api} from '~/services';

import {Actions} from 'react-native-router-flux';
import Lottie from 'lottie-react-native';

import {Page} from '~/components';
import {colors, metrics} from '~/assets/styles';

import success from '~/assets/animations/success.json';

import {
  Container,
  Question,
  QuestionText,
  Options,
  Option,
  OptionText,
} from './styles';

function Detail(props) {
  const {id} = props;

  const [data, setData] = useState(null);
  const [question, setQuestion] = useState(null);
  const [done, setDone] = useState(false);
  const [index, setIndex] = useState(-1);
  const [total, setTotal] = useState(0);
  const [questionary, setQuestionary] = useState({
    questionary_id: id,
    anwsers: [],
  });

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    done &&
      setTimeout(() => {
        Actions.reset('home');
      }, 1500);
  }, [done]);

  useEffect(() => {
    data !== null && setIndex(0);
    data !== null && setTotal(data.questions.length);
  }, [data]);

  useEffect(() => {
    index >= 0 && setQuestion(data.questions[index]);
  }, [index]);

  useEffect(() => {
    index !== -1 && setIndex(index + 1);

    total !== 0 && questionary.anwsers.length === total && finish();
  }, [questionary]);

  async function finish() {
    console.tron.log(questionary);
    setDone(true);
  }

  async function loadData() {
    try {
      const response = await api.get(`/questionaries/${id}`);

      setData(response.data[0]);
      setIndex(0);
    } catch (error) {}
  }

  function selectOption(option) {
    setQuestionary({
      ...questionary,
      anwsers: [
        ...questionary.anwsers,
        {option_id: option.id, question_id: question.id},
      ],
    });
  }

  return (
    <Page color={colors.primary}>
      <Container>
        {done ? (
          <Lottie
            style={{alignSelf: 'center', width: metrics.screenWidth * 0.9}}
            resizeMode="contain"
            source={success}
            autoPlay
          />
        ) : (
          <>
            {question !== null && (
              <>
                <Question>
                  <QuestionText>{question.title}</QuestionText>
                </Question>

                <Options>
                  {question.options.map(option => (
                    <Option onPress={() => selectOption(option)}>
                      <OptionText>{option.title}</OptionText>
                    </Option>
                  ))}
                </Options>
              </>
            )}
          </>
        )}
      </Container>
    </Page>
  );
}

export default Detail;
