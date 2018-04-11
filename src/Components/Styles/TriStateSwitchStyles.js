import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';

export default StyleSheet.create({
  container__frame: { 
    position: 'absolute',
    height: 30,
    left: 0,
    right: 0,
    top: 0.5,
    marginTop: 2.5,
    marginLeft: 8,
    marginRight: 7.5,
    borderRadius: 40,
    backgroundColor: '#dedede'
  },
    container: { 
      paddingLeft: 10, 
      paddingRight: 10 
    },
      switch__container: {
        flexDirection: 'row',
        paddingTop: 2.5,
        paddingBottom: 2.5,
      },
        switch__holder: {
          position: 'absolute',
          height: 30,
          width: 45,
          borderRadius: 40,
          elevation: 5,
          marginTop: 2.5,
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
