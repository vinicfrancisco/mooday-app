import styled from 'styled-components';
import {colors} from '~/assets/styles';

export const Container = styled.TouchableOpacity`
  align-items: center;
  background-color: ${props => (props.outline ? colors.white : colors.primary)};
  border: 1px solid ${colors.primary};
  border-radius: 25px;
  height: 36px;
  justify-content: center;
  margin-bottom: 14px;
  padding: 0 20px;
  width: 100%;
`;

export const Label = styled.Text`
  color: ${props => (props.outline ? colors.primary : colors.white)};
  font-size: 13px;
  font-weight: 600;
  line-height: 19px;
  text-transform: uppercase;
`;
