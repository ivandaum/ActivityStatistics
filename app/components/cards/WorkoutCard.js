import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {getDiff, toMinutes} from '../../helpers/Time';
import {$t} from '../../helpers/Locale';

// import DateTime from '../DateTime';

const WorkoutCard = (props) => {
  const {activityName, start, end} = props.item;

  const time = getDiff(start, end);
  const minutes = toMinutes(time);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{$t('workouts.' + activityName)}</Text>
      <Text style={styles.time}>{minutes} min</Text>
      {/* <View style={styles.row}> */}
      {/* <DateTime time={start} /> */}
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    padding: 20,
    backgroundColor: 'red',
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: '#f5f5f5',
    justifyContent: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 17,
    marginBottom: 10,
  },
  time: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default WorkoutCard;
