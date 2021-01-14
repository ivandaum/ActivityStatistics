import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import WorkoutApi from '../../api/WorkoutApi';
import {formatDays} from '../../models/DayModel';
import DayCard from '../cards/DayCard';

const renderItem = ({item}) => {
  return <DayCard day={item} />;
};

const DaysWorkout = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    WorkoutApi.sortByDay((results) => {
      const formatedDays = formatDays(results);
      setDays(formatedDays);
    });
  }, [days]);

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
