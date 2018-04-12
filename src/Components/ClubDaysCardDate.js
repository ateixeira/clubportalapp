import React from 'react';
import { View, Text } from 'react-native';

import styles from './Styles/ClubDaysCardStyles';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

class ClubDaysCardDate extends React.Component {
  render() {
    const {nextClubdayDate} = this.props;
    return (
      <View style={[styles.clubdays_date__container]}>
        <View style={[styles.clubdays_weekday__container]}>
          <Text style={[styles.clubdays_weekday__text]}>
            {nextClubdayDate.format('dddd')}
          </Text>
        </View>
        <View style={[styles.clubdays_day__container]}>
          <Text style={[styles.clubdays_day__text]}>
            {nextClubdayDate.format('DD')}
          </Text>
        </View>
        <View style={[styles.clubdays_month_year__container]}>
          <Text style={[styles.clubdays_month_year__text]}>
            {nextClubdayDate.format('MMMM YYYY')}
          </Text>
        </View>
        <View style={[styles.clubdays_location__container]}>
          <Text style={[styles.clubdays_location__text]}>De meern</Text>
          <EvilIcon name="location" size={12} color="#ED4C67" />
        </View>
      </View>
    )
  }
}

export default ClubDaysCardDate;
