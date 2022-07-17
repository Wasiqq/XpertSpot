import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ResetPin from './src/Screens/ResetPin';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <ResetPin />
    );
  }
}
