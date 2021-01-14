import {getDiff, toMinutes} from '../helpers/Time';
import {percDiff} from '../helpers/Math';

export const formatDays = (days) => {
  const length = days.length;
  for (let i = 0; i < length; i++) {
    const datas = {};

    const day = days[i];
    const prevDay = days[i + 1];

    datas.duration = duration(day.workouts);

    datas.workoutsCount = day.workouts.length;
    datas.caloriesBurned = calCount(day.workouts);

    if (prevDay) {
      const prevDuration = duration(prevDay.workouts);
      datas.durationIncrease = percDiff(datas.duration, prevDuration);
      datas.caloriesBurnedIncrease = percDiff(
        datas.caloriesBurned,
        calCount(prevDay.workouts),
      );
    }

    days[i].datas = datas;
  }

  return days;
};

export const duration = (workouts) => {
  let total = 0;
  workouts.map((workout) => {
    const {start, end} = workout;
    const time = getDiff(start, end);
    total += toMinutes(time);
  });
  return total;
};

export const calCount = (workouts) => {
  let cal = 0;
  workouts.map((workout) => (cal += workout.calories));
  return cal;
};
