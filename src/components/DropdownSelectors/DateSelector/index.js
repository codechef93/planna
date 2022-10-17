import React from 'react';
import PropTypes from 'prop-types';
import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date';
import './index.css';

const DateSelector = ({year, month, day, spacing=20, onYearChange, onMonthChange, onDayChange }) => {
  // const [year, setYear] = useState('');
  // const [month, setMonth] = useState('');
  // const [day, setDay] = useState('');


  return (
    <div className={'align-row-start date-selector'}>
      <div className={'flex_1 picker-item'}>
        <YearPicker
          defaultValue={'YYYY'}
          start={1940} // default is 1900
          // reverse // default is ASCENDING
          value={year} // mandatory
          onChange={(year) => {
            // mandatory
            // setYear(year);
            onYearChange(year);
          }}
          id={'year'}
          name={'year'}
        />
      </div>
      <div style={{ width: spacing }} />
      <div className={'flex_1 picker-item'}>
        <MonthPicker
          defaultValue={'MM'}
          numeric // to get months as numbers
          endYearGiven // mandatory if end={} is given in YearPicker
          year={year} // mandatory
          value={month} // mandatory
          onChange={(month) => {
            // mandatory
            // setMonth(month);
            onMonthChange(month);
          }}
          id={'month'}
          name={'month'}
        />
      </div>
      <div style={{ width: spacing }} />
      <div className={'flex_1 picker-item'}>
        <DayPicker
          defaultValue={'DD'}
          year={year} // mandatory
          month={month} // mandatory
          endYearGiven // mandatory if end={} is given in YearPicker
          value={day} // mandatory
          onChange={(day) => {
            // mandatory
            // setDay(day);
            onDayChange(day);
          }}
          id={'day'}
          name={'day'}
        />
      </div>
    </div>
  );
};

DateSelector.propTypes = {
  date: PropTypes.string,
  year: PropTypes.string,
  month: PropTypes.string,
  spacing: PropTypes.number,
  day: PropTypes.string,
  style: PropTypes.object,
  onYearChange: PropTypes.func,
  onMonthChange: PropTypes.func,
  onDayChange: PropTypes.func
};

export default DateSelector;
