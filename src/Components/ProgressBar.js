  import React, { Component } from 'react';
  import { View, Text } from 'react-native';
  import * as Progress from 'react-native-progress';
  export default class ProgressBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    render() {
      return (
        <View>
          <Progress.Bar borderColor='white' color='#5544ab' unfilledColor='#e6e6e6' borderRadius={10} progress={0.3} width={null}  height={12} style={{marginHorizontal:20}}/>
        </View>
      );
    }
  }
