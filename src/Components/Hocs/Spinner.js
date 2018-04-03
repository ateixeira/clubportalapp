import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

export default (Comp) => {
  return ({ spinner, children, ...props }) => (
    <View style={{ flex: 1 }}>
      <Comp {...props}>
        {children}
      </Comp>
      {spinner &&
        <View
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: 'rgba(0, 0, 0, 0.7)', justifyContent: 'center' }
          ]}
        >
          <ActivityIndicator size="large" />
        </View>}
    </View>
  );
};
