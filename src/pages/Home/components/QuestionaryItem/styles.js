import styled from 'styled-components/native';
import {colors, metrics} from '~/assets/styles';

export const Container = styled.TouchableOpacity`
  align-items: flex-start;
  align-self: center;
  background-color: ${colors.white};
  border-radius: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 10px;
  padding: 15px 20px;
  width: ${metrics.screenWidth * 0.9};
`;

export const Info = styled.View`
  margin-left: 20px;
`;

export const Title = styled.Text`
  color: ${colors.black};
  font-size: 16px;
  font-weight: bold;
  line-height: 21px;
`;

export const Description = styled.Text`
  color: ${colors.darkGray};
  font-size: 13px;
  font-weight: normal;
  line-height: 18px;
  margin-top: 8px;
`;
