import React from 'react';
import { View, Text } from 'react-native';

class LoadingScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#dedede'}}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Loading screen</Text>
            </View>
        )
    }
}

export default LoadingScreen;
