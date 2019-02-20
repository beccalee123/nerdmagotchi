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

// import React, { Component } from 'react';
// import { Animated, TouchableWithoutFeedback, Text, View, StyleSheet, Easing } from 'react-native';

// export default class App extends Component {
//   constructor() {
//     super()
//     this.animatedValue = new Animated.Value(0)
//   }

//   componentDidMount() {
//     this.idleMove();
//   }

  // idleMove() {
  //   Animated.loop(
  //     Animated.sequence([
  //       Animated.timing(this.animatedValue, {toValue: 1.0, duration: 150, easing: Easing.linear, useNativeDriver: true}),
  //       Animated.timing(this.animatedValue, {toValue: -1.0, duration: 300, easing: Easing.linear, useNativeDriver: true}),
  //       Animated.timing(this.animatedValue, {toValue: 0.0, duration: 150, easing: Easing.linear, useNativeDriver: true})
  //     ])
  //   ).start();
  // }

//   render() {
//     return (
//       <View style={styles.container}>
//      <Animated.Image
//         source={require('./assets/floppy.png')}
//         style={{
//           width: 200,
//           height: 200,
//           transform: [{
//             rotate: this.animatedValue.interpolate({
//               inputRange: [-1, 1],
//               outputRange: ['-0.1rad', '0.1rad']
//             })
//           }],
//         }}
//       />
//       <Text>I AM ALIVE!</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//   }
// })


// this.moveAnimation = new Animated.ValueXY({ x: 10, y: 450 })
//   }

//   _moveBall = () => {
//     Animated.spring(this.moveAnimation, {
//       toValue: {x: 250, y: 10},
//     }).start()
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Animated.View style={[styles.tennisBall, this.moveAnimation.getLayout()]}>
//           <TouchableWithoutFeedback style={styles.button} onPress={this._moveBall}>
//             <Text style={styles.buttonText}>Press</Text>
//           </TouchableWithoutFeedback>        
//         </Animated.View>
//       </View>
//     );
//   }
// }