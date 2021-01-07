import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import WorkoutApi from '../../api/WorkoutApi';
import StatByDay from '../cards/StatByDay';

const renderItem = ({item}) => {
  return <StatByDay day={item} />;
};
const DaysWorkout = () => {
  const [days, setDays] = useState({});

  WorkoutApi.sortByDay((results) => {
    setDays(results);
  });

  return (
    <FlatList
      style={styles.container}
      keyExtractor={(item, index) => index.toString()}
      data={days}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default DaysWorkout;
