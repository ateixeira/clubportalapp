import React from 'react';
import { View, Text } from 'react-native';

class LoadingScreen extends React.Component {
    render() {
        return (
            <View style={{flex:1, justifyContent: 'center', backgroundColor: '#dedede'}}>
                <Text>Loading screen!!!!!s</Text>
            </View>
        )
    }
}

export default LoadingScreen;
