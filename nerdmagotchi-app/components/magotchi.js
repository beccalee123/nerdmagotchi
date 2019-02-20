import React from 'react';
import { Text, View, Image } from "react-native";
import { When, Unless } from './conditionals';

const cd = require('./assets/images/cdrom.png')
const thumb = require('./assets/images/thumbdrive.png')
const cloud = require('./assets/images/thecloud.png')
const evolveArray = [cd, thumb, cloud];
let stage = 0;


export default class Magotchi extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            image: require('./assets/images/floppy.png')
        }
    }

    componentDidUpdate(){
        this.evolve();
    }

    evolve() {
        if(this.props.stepCount > 30 && this.props.stepCount < 40) {
            this.setState({image: evolveArray[stage]});
            stage++;
        }
    }

    render(){
        return (
            <View>
                <When condition={this.props.stepCount || this.props.stepCount === 0}>
                    <Text>In Magotchi component</Text>
                    <Text>Your steps are:  {this.props.stepCount}</Text>
                    <Image source={this.state.image} />
                </When>
            </View>
        )
    }
}

{/* <Image
source={this.state.image}
/> */}