import React from 'react';
import { Text, View, Image } from "react-native";
import { When, Unless } from './conditionals';

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
        let evolveArray = ['./assets/images/cdrom.png', './assets/images/thumbdrive.png', './assets/images/thecloud.png']
        let stage = 0;
        if(this.props.stepCount > 30) {
            this.setState({image: require(evolveArray[stage])});
            stage++;
        }
        
    }

    render(){
        return (
            <View>
                
              
                <Text>In Magotchi component</Text>
                <Text>Your steps are:  {this.props.stepCount}</Text>
                <Image
                source={this.state.image}
                />
               
            </View>
        )
    }
}

{/* <Image
source={this.state.image}
/> */}