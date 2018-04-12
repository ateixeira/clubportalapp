import React from 'react';
import { View, Text, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import TriStateSwitch from './TriStateSwitch';
import styles from './Styles/ClubDaysCardStyles';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

class ClubDaysCardParticipants extends React.Component {

  _onChange(e) {
    console.log('ON CHANGE ---> ', e)
  }

  render() {
    return (
      <View style={[styles.clubdays_participants__container]}>
        <View style={[styles.clubdays_participation_summary__container]}>
          <Text style={[styles.clubdays_participants_count__text]}>{this.props.confirmedUsers.length}</Text>
          <Text style={[styles.clubdays_participants_desc__text]}>people confirmed...</Text>
        </View>
        <View style={[styles.clubdays_participation_inquiry__container]}>
          <Text style={[styles.clubdays_participation_inquiry__text]}>What about you?</Text>
        </View>
        <View style={[styles.clubdays_participation_switch__container]}>
          <TriStateSwitch
            AnimatedIcon={AnimatedIcon}
            leftIconName={'times'}
            middleIconName={'question'}
            rightIconName={'check'}
            userReaction={this.userReaction}
            onChange={this._onChange}
          />
        </View>
      </View>
    )
  }
}

export default ClubDaysCardParticipants;
