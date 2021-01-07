import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Home from './app/components/pages/Home';

import {setI18nConfig} from './app/helpers/Locale';
import {backgroundColor} from './app/styles/index';

const App = () => {
  setI18nConfig();
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
    flex: 1,
  },
});
