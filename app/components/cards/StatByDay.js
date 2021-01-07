import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  getLetterMonth,
  getLetterDay,
  getDiff,
  toMinutes,
} from '../../helpers/Time';
import {$t} from '../../helpers/Locale';

const getMinutesWorkout = (items) => {
  let total = 0;
  items.map((item) => {
    const {start, end} = item;
    const time = getDiff(start, end);
    total += toMinutes(time);
  });
  return total;
};
const StatByDay = (props) => {
  const {dayName, day, month, year} = props.day.date;

  const dayLetter = getLetterDay(dayName);
  const monthLetter = getLetterMonth(month);

  const workoutsNumber = props.day.items.length;
  const minutes = getMinutesWorkout(props.day.items);

  return (
    <View>
      <Text style={styles.title}>
        {dayLetter} {day} {monthLetter} {year}
      </Text>
      <View style={styles.card}>
        <Text>{workoutsNumber} exercices</Text>
        <Text>{minutes} minutes</Text>
      </View>
    </View>
  );
};

export default StatByDay;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'red',
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: '#f5f5f5',
    justifyContent: 'space-between',
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
