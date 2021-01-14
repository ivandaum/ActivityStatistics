import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ActivityItem = (props) => {
  const {title, label, icon, percent} = props.item;

  return (
    <View style={styles.card}>
      <View style={styles.col}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
      <Text style={styles.col}>{percent}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 16,
  },
  title: {
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    opacity: 0.8,
  },
  icon: {
    fontSize: 28,
    borderRadius: 25,
    backgroundColor: '#E0E1E1',
    width: 40,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  col: {
    flex: 1,
    padding: 20,
  },

  contentContainer: {
    flex: 3,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default ActivityItem;
