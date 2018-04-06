import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoadingScreen from '../Components/LoadingScreen';
import LoggedInStackNavigator from './LoggedInStackNavigator';
import NotLoggedInStackNavigator from './NotLoggedInStackNavigator';

import { addListener } from '../Utils/redux';


export const AppNavigator = StackNavigator({
  LoadingScreen: { screen: LoadingScreen },
  LoggedInStack: { screen: LoggedInStackNavigator },
  NotLoggedInStack: { screen: NotLoggedInStackNavigator }
}, {
  initialRouteName: 'LoadingScreen',
  headerMode: 'none',
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'pink'
    }
  }
});

class AppNavigation extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, navigation } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: navigation,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  navigation: state.navigation,
});

export default connect(mapStateToProps)(AppNavigation);
