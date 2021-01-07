import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';

import {title} from '../../styles/index';

// TODO : implement https://github.com/terrillo/rn-apple-healthkit
// TODO : read https://www.dieproduktmacher.com/blog/fitness-app-react-native

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.title}>All activities</Text>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title,
});
