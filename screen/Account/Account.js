import React, {Component} from 'react';
import {View, Text, Button, AsyncStorage} from 'react-native';

class Account extends Component {
    static navigationOptions = {
        title: 'Account'
    };
    render() {
        return (
            <View>
                <Text>Account</Text>
                <Button title="Logout"
                        onPress={async () => {
                            await AsyncStorage.removeItem('token');
                            this.props.navigation.navigate('SignIn')
                        }}/>
            </View>
        )
    }
}

export default Account;