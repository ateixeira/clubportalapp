import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';

export default StyleSheet.create({
  /***** Card container *****/
  clubdays_card__container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 120,
    borderRadius: 6,
    margin: 20,
    padding: 10,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {
      height: 4,
    },
  },

    /***** Date container *****/
    clubdays_date__container: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
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
          marginTop: -10,
          marginBottom: -10,
        },
      clubdays_weekday__container: {
        // borderColor: 'black',
        // borderWidth: 1
      },
        clubdays_weekday__text:{
          fontWeight: 'bold',
          fontSize: 24,
        },
      clubdays_month_year__container: {
        // borderColor: 'black',
        alignItems: 'center', 
        // borderWidth: 1
      },
        clubdays_month_year__text: {
          fontSize: 12,
          letterSpacing: 1.2,
          fontWeight: '200',
        },
      clubdays_location__container: {
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingTop: 2,
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
      flexGrow: 2,
      paddingHorizontal: 20,
      paddingVertical: 5,
      // borderColor: '#FFC312',
      // borderWidth: 1,
    },
      clubdays_participation_summary__container: {
        flexDirection: 'row',
        justifyContent: 'center',
        // borderColor: 'yellow',
        // borderWidth: 1,
      },
        clubdays_participants_count__text: {
          fontSize: 22,
          fontWeight: 'bold',
          // borderColor: 'blue',
          // borderWidth: 1,
        },
        clubdays_participants_desc__text: {
          alignItems: 'baseline',
          paddingTop: 5,
          paddingLeft: 3,
          fontSize: 12,
          fontWeight: 'bold',
          // borderColor: 'blue',
          // borderWidth: 1,
        },
      clubdays_participation_inquiry__container: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 15,
      },
        clubdays_participation_inquiry__text: {
          fontWeight: 'bold',
          // borderColor: 'blue',
          // borderWidth: 1,
        },
      clubdays_participation_switch__container: {
        flexDirection: 'row',
        justifyContent: 'center',
        // borderColor: 'yellow',
        // borderWidth: 1,
      },
        clubdays_participants__text: {
          fontWeight: 'bold',
          // borderColor: 'blue',
          // borderWidth: 1,
        },
});
