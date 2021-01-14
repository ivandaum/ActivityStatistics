import AppleHealthKit from 'react-native-health';
import {getDate} from '../helpers/Time';

const perms = {
  permissions: {
    read: [AppleHealthKit.Constants.Permissions.Workout],
  },
};

const WorkoutApi = {
  askPermissions: () => {
    return new Promise((resolve, reject) => {
      AppleHealthKit.initHealthKit(perms, (error) => {
        if (error) {
          reject(error);
        }

        resolve(true);
      });
    });
  },

  getAll: async (complete) => {
    const isAuthorized = await WorkoutApi.askPermissions();

    if (!isAuthorized) {
      return [];
    }

    const opt = {
      startDate: new Date(-1).toISOString(),
      endDate: new Date().toISOString(),
      type: 'Workout', // one of: ['Walking', 'StairClimbing', 'Running', 'Cycling', 'Workout']
    };

    AppleHealthKit.getSamples(opt, (error, results) => {
      if (error) {
        complete(error);
      }

      complete(results);
    });
  },

  sortByDay: async (complete) => {
    const days = [];
    let lastKey = null;

    WorkoutApi.getAll((results) => {
      results.map((entry) => {
        const d = getDate(entry.start);
        const k = `${d.year}-${d.month}-${d.day}`;

        if (lastKey !== k) {
          days.push({
            date: d,
            key: k,
            workouts: [],
          });
          lastKey = k;
        }

        days[days.length - 1].workouts.push(entry);
      });

      complete(days);
    });
  },
};

export default WorkoutApi;
