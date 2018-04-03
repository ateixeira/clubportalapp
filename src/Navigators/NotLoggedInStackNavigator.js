import { StackNavigator } from 'react-navigation';
import { StyleSheet } from 'react-native';

import LoginScreen from '../Components/LoginScreen';

// Manifest of possible screens
export default StackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: { title: 'Login' }
  }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginScreen'
});
