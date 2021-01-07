import React, {useState} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

// TODO : implement https://github.com/agencyenterprise/react-native-health
// TODO : read https://www.dieproduktmacher.com/blog/fitness-app-react-native

import DaysWorkout from '../lists/DaysWorkout';

const Home = () => {
  return (
    <View style={styles.container}>
      <DaysWorkout />
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
