import { StackNavigator } from 'react-navigation';
import { StyleSheet } from 'react-native';

import MainScreen from '../Containers/MainScreen';
import ProfileScreen from '../Components/ProfileScreen';

// Manifest of possible screens
export default StackNavigator({
    MainScreen: {
        screen: MainScreen,
        navigationOptions: { title: 'Login' }
    },
    ProfileScreen: { 
        screen: ProfileScreen
    }
}, {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'MainScreen'
})
