import * as React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default class TopTabThird extends React.Component {
  render() {
    return (
      <Container>
        <Text>TopTabThird Screen</Text>
      </Container>
    );
  }
}
