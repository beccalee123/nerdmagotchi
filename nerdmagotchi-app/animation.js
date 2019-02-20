// excited nerdling

import React, { Component } from 'react';
import { Animated, View, Text, Easing } from 'react-native';

export default class Animation extends Component {
  constructor(props) {
    super(props)
    this.springValue = new Animated.Value(0.3)
  }

  componentDidMount() {
    this.excitedNerdling();
  }

  excitedNerdling = () => {
  Animated.spring(
    this.springValue,
    {
      toValue: {x: 0, y: 0 },
      moveTolerance: 50,
      friction: 1,
      duration: 150,
      // bounciness: 2
      // speed: 1
  }).start();
  Animated.timing(
    this.springValue, 
    {
    toValue: 100,
    easing: Easing.elastic(2),  
    duration: 150,
  }).start();
  Animated.loop(
    Animated.sequence([
      Animated.timing(this.springValue, {toValue: 0.6, duration: 300, easing: Easing.linear, useNativeDriver: true}),
      Animated.timing(this.springValue, {toValue: 0.8, duration: 500, easing: Easing.linear, useNativeDriver: true}),
      Animated.timing(this.springValue, {toValue: 0.5, duration: 400, easing: Easing.linear, useNativeDriver: true})
    ])
  ).start();
  }
  render () {
    return (
    <View >
      <Animated.Image 
        style={ {width: 200, height: 200, transform: [{scale:this.springValue}]} } 
        bouncingDistance={1.4}
        source={require('./components/assets/images/floppy.png')}/>
        <Text
          style={ {marginBottom: 10} }
          >Nerdling</Text>
    </View>
    );
  }
};