import React from 'react';
import {Text} from 'react-native';

import {$t} from '../helpers/Locale';
import {getDate} from '../helpers/Time';

const DateTime = (props) => {
  const d = getDate(props.time);
  return (
    <Text>
      {d.dayName} {d.day} {d.month} {d.year}
    </Text>
  );
};

export default DateTime;
