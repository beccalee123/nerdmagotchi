import React from 'react';
import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import PedometerSensor from './components/pedometer';
import Animation from './animation.js';
// import {Font} from 'expo';
// import Nanum from './components/assets/fonts/font.js';



export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fontLoaded: false,
    }
  }

  render() {
    return (
      <View style={styles.container}>
   
        <Text>NERDMAGOTCHI!!!</Text>
        <Animation />
        <PedometerSensor />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // font: {
  //   fontFamily: 'nanum-brush-script'
  // }
});
