import styled from 'styled-components';
import { colors, metrics } from '~/assets/styles';

export const Container = styled.View`
  align-items: center;
  background-color: ${colors.primary};
  height: 100%;
  justify-content: center;
`

export const Box = styled.View`
  align-items: center;
  background-color: ${colors.white};
  border-radius: 20px;
  padding: 15px 25px;
  width: ${metrics.screenWidth * 0.75};
`;

export const Logo = styled.Image`
  align-self: center;
  height: 60px;
  margin-bottom: 20px;
  width: 180px;
`;


export const Form = styled.View`
  width: 100%;
`;

export const FormInput = styled.TextInput`
  border: 1px solid ${colors.lightGray};
  border-radius: 4px;
  height: 44px;
  margin-bottom: 14px;
  padding: 6px 10px;
  width: 100%;
`;

