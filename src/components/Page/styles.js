import styled from 'styled-components/native';
import {colors} from '~/assets/styles';

export const Container = styled.SafeAreaView`
  background-color: ${props => (props.color ? props.color : colors.white)};
  flex: 1;
`;
