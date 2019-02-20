import Expo from "expo";
import React from "react";
import { Pedometer } from "expo";
import { StyleSheet, Text, View, Image } from "react-native";
import { When, Unless } from './conditionals';
import Magotchi from './magotchi';

export default class PedometerSensor extends React.Component {
  state = {
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: 0
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result)
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Walk! And your Nerdmagotchi will evolve!</Text>
        <Text>Current steps: {this.state.currentStepCount}</Text>
        <Magotchi 
          stepCount={this.state.currentStepCount}
        />

        {/* <When condition={this.state.currentStepCount > 20}>
            <Text>You're step count is greater than 20!</Text>
            <Image
              source={require('./assets/images/floppy.png')}
            />
        </When>
        <When condition={this.state.currentStepCount > 30}>
            <Text>You're step count is greater than 30!</Text>
            <Image
              source={require('./assets/images/cdrom.png')}
            />
        </When>
        <When condition={this.state.currentStepCount > 40}>
            <Text>You're step count is greater than 40!</Text>
            <Image
              source={require('./assets/images/thumbdrive.png')}
            />
        </When>
        <When condition={this.state.currentStepCount > 50}>
            <Text>You're step count is greater than 50!</Text>
            <Image
              source={require('./assets/images/thecloud.png')}
            />
        </When> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  heading: {
    fontSize: 50,
    color: 'blue',
  }
});
