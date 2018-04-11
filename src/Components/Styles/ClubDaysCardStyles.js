import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';

export default StyleSheet.create({
  /***** Card container *****/
  clubdays_card__container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 6,
    margin: 20,
    padding: 10,
  },

    /***** Date container *****/
    clubdays_date__container: {
      flex: 1,
      alignItems: 'flex-start',
      flexDirection: 'row',
      // borderColor: '#12CBC4',
      // borderWidth: 1,
      marginRight: 5,
    },
      clubdays_day__container: {
        // borderColor: 'black',
        // borderWidth: 1
      },
        clubdays_day__text: {
          fontWeight: 'bold',
          fontSize: 50,
          color: '#3c87b5',
          alignItems: 'flex-start',
          paddingRight: 5,
        },
      clubdays_rest_of_date__container: {
        flexDirection: 'column',
        justifyContent: 'center',
      },
        clubdays_weekday__container: {
          // borderColor: 'black',
          // borderWidth: 1
        },
          clubdays_weekday__text:{
            fontWeight: 'bold',
            fontSize: 26,
          },
        clubdays_month_year__container: {
          // borderColor: 'black',
          // borderWidth: 1
        },
          clubdays_month_year__text: {
            fontSize: 12,
            fontWeight: '200',
          },
        clubdays_location__container: {
          flexDirection: 'row',
          // borderColor: 'black',
          // borderWidth: 1
        },
          clubdays_location__text:{
            fontSize: 10,
            fontWeight: 'bold',
          },
    /***** Participants container *****/
    clubdays_participants__container: {
      flex: 1,
      flexGrow: 1,
      width: 200,
      // borderColor: '#FFC312',
      // borderWidth: 1,
    },
      clubdays_participation_summary__container: {
        flexDirection: 'row',
        borderColor: 'yellow',
        borderWidth: 1,
      },
        clubdays_participants_count__text: {
          fontSize: 18,
          fontWeight: 'bold',
          // borderColor: 'blue',
          // borderWidth: 1,
        },
        clubdays_participants_desc__text: {
          alignItems: 'baseline',
          paddingTop: 5,
          fontSize: 10,
          fontWeight: 'bold',
          // borderColor: 'blue',
          // borderWidth: 1,
        },
      clubdays_participation_switch__container: {
        flexDirection: 'row',
        borderColor: 'yellow',
        borderWidth: 1,
      },
        clubdays_participants__text: {
          fontWeight: 'bold',
          // borderColor: 'blue',
          // borderWidth: 1,
        },
});
