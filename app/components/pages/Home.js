import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

// TODO : implement https://github.com/agencyenterprise/react-native-health
// TODO : read https://www.dieproduktmacher.com/blog/fitness-app-react-native

import DaysList from '../lists/DaysList';

const Home = () => {
  return (
    <View style={styles.container}>
      <DaysList />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
