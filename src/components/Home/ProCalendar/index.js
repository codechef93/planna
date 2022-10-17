import React, {useEffect, useState } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import moment from 'moment';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ChevronLeft, ChevronRight } from '@styled-icons/heroicons-solid';
import { Theme } from '../../../assets';


const ProCalendarView = ({curDate, minDate, onSelectDate }) => {
  const [activeStartDay, setActiveStartDay] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date());

  useEffect(()=>{
    setSelectedDay(curDate);
  }, [curDate])

  const onChangeDate = (date) => {
    setSelectedDay(date);
    onSelectDate(date);
  };

  return (
    <div className={'w100 pro-calendar-wrap pos_relative'}>
      <Calendar
        className={'pro-calendar'}
        calendarType={'US'}
        prev2Label={null}
        next2Label={null}
        prevLabel={<ChevronLeft size={26} color={Theme.colors.gray1}/>}
        nextLabel={<ChevronRight size={26} color={Theme.colors.gray1}/>}
        minDate={minDate}
        activeStartDate={activeStartDay}
        onActiveStartDateChange={({ action, activeStartDate, value, view }) => {
          setActiveStartDay(activeStartDate);
          console.log('Changed view to: ', action,value, view);
        }}
        value={selectedDay}
        onChange={onChangeDate}
        tileClassName={({ activeStartDate, date, view }) => activeStartDate != null && view === 'month' && date.getDay() === 3 ? 'wednesday' : null}
      />
      <div className={'cur-month'}>{moment(activeStartDay).format('MMM YYYY')}</div>
      <div className={'today-btn btn-style'}
        onClick={()=>{
          setActiveStartDay(new Date());
          onChangeDate(new Date());
        }}
      >Today</div>
    </div>
  );
};

ProCalendarView.propTypes = {
  curDate: PropTypes.object,
  minDate: PropTypes.object,
  className: PropTypes.string,
  onSelectDate: PropTypes.func
};

export default ProCalendarView;
