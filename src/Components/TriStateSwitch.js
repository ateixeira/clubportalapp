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
    this.med_value = (values.min + values.max) / 2;

    this.med_left_value = (this.min_value + this.med_value)/2;
    this.med_right_value = (this.med_left_value * 3) - (this.min_value * 2);

    this.startValue = 
      this.props.userReaction === undefined ? 45 : this.props.userReaction === true ? 90 : 0;

    this.state = {
      startValue: this.startValue,
      isSaving: false,
    }

    // this.switchVal = this.state.startValue;
    this.switchValAnimation = new Animated.Value(this.state.startValue);
    // this.switchValAnimation.addListener(({value}) => this.switchVal = value);

  };

	switchLeft = () => {
    this.switchToItem(0);
  }
	switchMiddle = () => {
    this.switchToItem(45);
  }
	switchRight = () => {
    this.switchToItem(90);
  }

  switchToItem = (target) => {
    this.props.onChange(target);
    Animated.timing(this.switchValAnimation, {
      toValue: target,
      duration: Metrics.triStateSwitch.animation.duration
    }, { useNativeDrive: true }).start(() => {
      this.setState({ startValue: target })
    });
  }
  
	renderSwitch = () => {
    const AnimatedIcon = this.props.AnimatedIcon;

		return (
      <View style={styles.switch__container}>

        <Animated.View
          ref={switchButton => this.switchButton = switchButton}
          style={[
            { left: this.switchValAnimation }, 
            styles.switch__holder,
            { 
              backgroundColor: this.switchValAnimation.interpolate({
                inputRange: [0, 45, 90],
                outputRange: ['#EA2027', '#1289A7', '#009432'],
              })
            }, 
          ]} 
        />

        <TouchableOpacity 
          style={[styles.switch__button_container, ]} 
          onPress={this.switchLeft}>

          <AnimatedIcon 
            name={this.props.leftIconName} 
            size={20}
            style = {{
              color: 'white'
            }}
          />

        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.switch__button_container, ]} 
          onPress={this.switchMiddle}>

          <AnimatedIcon
            name={this.props.middleIconName}
            size={20}
            style = {{
              color: 'white'
            }}
          />

        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.switch__button_container, ]} 
          onPress={this.switchRight}>

          <AnimatedIcon
            name={this.props.rightIconName}
            size={20}
            style = {{
              color: 'white'
            }}
          />

        </TouchableOpacity>

			</View>
		)
	}

	render(){
		return(
      <View style={styles.container}>
        <View style={[styles.container__frame,]} />
        {this.renderSwitch()}
      </View>
		)
  }
}
