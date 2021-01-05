import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

import Home from './app/components/tabs/Home';

import {backgroundColor} from './app/styles/index';

const App = () => {
  return (
    <View style={styles.app}>
      <Home />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    backgroundColor,
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
});
