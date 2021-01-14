import {$t} from '../helpers/Locale';

export const toSeconds = (time) => Math.floor(time / 1000 / 60);

export const toMinutes = (time) => Math.floor(time / 1000 / 60);

export const toHours = (time) => Math.floor(time / 1000 / 60 / 60);

export const getDiff = (start, end) => {
  const startDate = new Date(start).getTime();
  const endDate = new Date(end).getTime();

  return endDate - startDate;
};

export const getDate = (time) => {
  const d = new Date(time);

  const dayName = d.getDay();
  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();

  return {dayName, day, month, year};
};

export const getMonthTrad = (index) => $t('months.' + index);

export const getLetterTrad = (index) => $t('days.' + index);
