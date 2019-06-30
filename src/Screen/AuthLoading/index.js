import * as React from 'react';
import { AsyncStorage, Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this._bootstrapAsync();
    }, 1000);
  }

  render() {
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    );
  }

   _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'MainTab' : 'Auth');
  };
}
