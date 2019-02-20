import React from 'react';
import { Text, View, Image, Button, StyleSheet, Animated, Easing } from "react-native";
import {If, When, Unless, Then, Else } from './conditionals';

const full = require('./assets/images/fullegg.png')
const cracked = require('./assets/images/crackedegg.png')
const hatched = require('./assets/images/hatchedegg.png')
const floppy = require('./assets/images/floppy.png')
const cd = require('./assets/images/cdrom.png')
const thumb = require('./assets/images/thumbdrive.png')
const cloud = require('./assets/images/thecloud.png')
const evolveArray = [full, cracked, hatched, floppy, cd, thumb, cloud];


export default class Magotchi extends React.Component {
    constructor(props){
        super(props);
        this.animatedValue = new Animated.Value(0)
        this.state = {
            image: null,
            stepTrack: 0,
            canEvolve: true,
            stage: 0
        }
    }

    
    evolve = () => {
        if(this.state.canEvolve === true) {
            this.setState({image: evolveArray[this.state.stage]});
            this.state.stage + 1;
        }
        if(this.props.stepCount >= 10){
            this.setState({image: evolveArray[1]})
        }
        if(this.props.stepCount >= 20){
            this.setState({image: evolveArray[2]})
        }
        if(this.props.stepCount >= 30){
            this.setState({image: evolveArray[3]})
        }
        if(this.props.stepCount >= 40){
            this.setState({image: evolveArray[4]})
        }
        if(this.props.stepCount >= 50){
            this.setState({image: evolveArray[5]})
        }
        if(this.props.stepCount >= 60){
            this.setState({image: evolveArray[6]})
        }
        // this.setState({canEvolve: false});
    }

    // pet = () => {
    //     //write function to pet
    // }

    componentDidMount() {
        this.idleMove();
      }

    idleMove() {
        Animated.loop(
            Animated.sequence([
            Animated.timing(this.animatedValue, {toValue: 1.0, duration: 150, easing: Easing.linear, useNativeDriver: true}),
            Animated.timing(this.animatedValue, {toValue: -1.0, duration: 300, easing: Easing.linear, useNativeDriver: true}),
            Animated.timing(this.animatedValue, {toValue: 0.0, duration: 150, easing: Easing.linear, useNativeDriver: true})
            ])
        ).start();
    }
      
    render(){
        return (
            <View>
                <If condition={this.state.image}>
                    <Then>
                        <Animated.Image source={this.state.image} 
                            style={{
                                transform: [{
                                    rotate: this.animatedValue.interpolate({
                                        inputRange: [-1, 1],
                                        outputRange: ['-0.1rad', '0.1rad']
                                    })
                                }]
                            }}
                        />
                    </Then>
                    <Else>
                        <Text>Push evolve to get an egg!</Text>
                    </Else>
                </If>
                <When condition={this.state.canEvolve}>
                        <Button title="Evolve" onPress={this.evolve}>WOWZA!</Button>
                </When>
                    {/* <Button title="Pet" onPress={this.pet}>Pet!</Button> */}
            </View>
        )
    }
}
