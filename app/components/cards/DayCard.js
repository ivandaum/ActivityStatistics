import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import {getMonthTrad, getLetterTrad} from '../../helpers/Time';

import ActivityItem from '../items/ActivityItem';
import {$t} from '../../helpers/Locale';

const formatStatistics = (datas) => {
  const r = [];
  if (datas.duration) {
    r.push({
      title: `${datas.duration} ${$t('minutes')}`,
      percent: datas.durationIncrease,
      label: $t('fullDuration'),
      icon: '⏱',
    });
  }

  if (datas.workoutsCount) {
    r.push({
      title: `${datas.workoutsCount} ${$t('workouts')}`,
      label: $t('workoutsCount'),
      icon: '📋',
    });
  }

  if (datas.caloriesBurned) {
    r.push({
      title: `${Math.round(datas.caloriesBurned)} ${$t('cal')}`,
      percent: datas.caloriesBurnedIncrease,
      icon: '🍔',
      label: $t('caloriesBurned'),
    });
  }

  return r;
};

const renderActivity = ({item}) => {
  return <ActivityItem item={item} />;
};

const DayCard = (props) => {
  const {dayName, day, month, year} = props.day.date;

  const statistics = formatStatistics(props.day.datas);

  return (
    <View>
      <Text style={styles.title}>
        {getLetterTrad(dayName)} {day} {getMonthTrad(month)} {year}
      </Text>

      <FlatList
        style={styles.container}
        keyExtractor={(item, index) => index.toString()}
        data={statistics}
        renderItem={renderActivity}
      />
    </View>
  );
};

export default DayCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 20,
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
