import React, { Component } from 'react';
import {
  View,
	ViewPropTypes,
  StyleSheet,
  Text,
  Animated,
  PanResponder,
	TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Styles/TriStateSwitchStyles';

export default class TriStateSwitch extends Component {
  constructor(props) {
    super(props);
  };

	renderSwitch = () => {
		return (
      <View style={styles.switch__container}>
        <TouchableOpacity style={styles.switch__button_container} >
        </TouchableOpacity>
        <TouchableOpacity style={styles.switch__button_container} >
        </TouchableOpacity>
			</View>
		)
	}

	render(){
		return(
      <View style={styles.container}>
        {this.renderSwitch()}
      </View>
		)
  }
}
