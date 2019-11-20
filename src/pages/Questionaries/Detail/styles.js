import styled from 'styled-components/native';
import {colors, metrics} from '~/assets/styles';

export const Container = styled.View`
  background-color: ${colors.primary};
  height: 100%;
  width: 100%;
`;

export const Question = styled.View`
  align-self: center;
  background-color: ${colors.white};
  border-radius: 25px;
  min-height: 45%;
  padding: 20px 25px;
  width: ${metrics.screenWidth * 0.9};
`;

export const QuestionText = styled.Text`
  color: ${colors.black};
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
`;

export const Options = styled.View`
  margin-top: 25px;
`;

export const Option = styled.TouchableOpacity`
  align-items: center;
  align-self: center;
  background-color: ${colors.white};
  border-radius: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  height: 40px;
  justify-content: center;
  margin-bottom: 15px;
  width: ${metrics.screenWidth * 0.9};
`;

export const OptionText = styled.Text`
  color: ${colors.black};
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
`;
