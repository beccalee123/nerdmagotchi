import React from 'react';
import { StyleSheet, Button, Text, View} from 'react-native';
import PedometerSensor from './components/pedometer';
import {If, Then, Else} from './components/conditionals.js';
// import {Font} from 'expo';
// import Nanum from './components/assets/fonts/font.js';



export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      start: false
      
    }
  }

  handlePush = () => {
    this.setState({start: true});
  }

  render() {
    return (
      <View style={styles.container}>
        <If condition={!this.state.start}>
          <Then>
            <Text>NERDMAGOTCHI!!!</Text>
            <Button title="Start" onPress={this.handlePush}></Button>
          </Then>
          <Else>
            <PedometerSensor />
          </Else>
        </If>
        
        {/* <When condition={this.state.start}> */}
        {/* </When> */}
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
    marginTop: 40,
  },
  // font: {
  //   fontFamily: 'nanum-brush-script'
  // }
});
