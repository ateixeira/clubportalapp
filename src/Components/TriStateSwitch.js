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

import { Metrics } from '../Themes';
import styles from './Styles/TriStateSwitchStyles';

export default class TriStateSwitch extends Component {
  constructor(props) {
    super(props);
    
    const { values } = Metrics.triStateSwitch.animation;
    this.min_value = values.min;
    this.max_value = values.max;

  };

	switchLeft = () => {
    console.log('clicked switchLeft');
  }
	switchMiddle = () => {
    console.log('clicked switchMiddle');
  }
	switchRight = () => {
    console.log('clicked switchRight');
  }
  
	renderSwitch = () => {
    const AnimatedIcon = this.props.AnimatedIcon;

		return (
      <View style={styles.switch__container}>
        <TouchableOpacity 
          style={styles.switch__button_container} 
          onPress={this.switchLeft}>
          <AnimatedIcon 
            name={this.props.leftIconName} 
            size={20}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.switch__button_container} 
          onPress={this.switchMiddle}>
          <AnimatedIcon
            name={this.props.middleIconName}
            size={20}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.switch__button_container} 
          onPress={this.switchRight}>
          <AnimatedIcon
            name={this.props.rightIconName}
            size={20}
          />
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
