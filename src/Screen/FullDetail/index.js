import * as React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default class FullDetail extends React.Component {
  render() {
    return (
      <Container>
        <Text>FullDetail Screen</Text>
      </Container>
    );
  }
}
