import React from "react";

import {Font} from 'expo';

export default class Nanum extends React.Component {
    componentDidMount(){
        Font.loadAsync({
            'nanum-brush-script': require('./NanumBrushScript-Regular.ttf')
        });
    }
}

