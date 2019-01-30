import React from 'react';
import { TouchableNativeFeedback } from 'react-native';

const touchableWrapper = (props) => (
    <TouchableNativeFeedback onPress={props.onPress}>
        { props.children }
    </TouchableNativeFeedback>
);

export default touchableWrapper;