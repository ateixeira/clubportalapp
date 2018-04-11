import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';

export default StyleSheet.create({
  container: { 
    paddingLeft: 10, 
    paddingRight: 10 
  },
    switch__container: {
      flexDirection: 'row',
      paddingTop: 7.5,
      paddingBottom: 7.5,
    },
      switch__holder: {
        position: 'absolute',
        height: 30,
        width: 45,
        borderRadius: 40,
        elevation: 5,
        marginTop: 7.5,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: {
          height: 4,
        },
      },
      switch__button_container: {
        backgroundColor: 'transparent',
        height: 30,
        width: 45,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 100,
        // borderColor: 'blue',
        // borderWidth: 1,
      },
});
