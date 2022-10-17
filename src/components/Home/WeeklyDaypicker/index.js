import React, { useEffect, useState, useMemo } from 'react';
import moment from 'moment';
import { getWeekDays } from '../../../utils/common';
import Button from '@mui/material/Button';
import './index.css';
import PropTypes from 'prop-types';
import Theme from '../../../assets/theme';
import { ChevronLeft, ChevronRight } from '@styled-icons/heroicons-solid';

const WeeklyDayPicker = ({ initialDate = new Date(), minDate = null, className, onSelect }) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [curDate, setCurDate] = useState(initialDate);
  const [activeStartDay, setActiveStartDay] = useState(initialDate);
  const dates = useMemo(() => getWeekDays(activeStartDay), [activeStartDay]);

  useEffect(() => {
    setCurDate(initialDate);
    setActiveStartDay(initialDate);
  }, [initialDate]);

  const isPastDate = (date) => {
    if (minDate) {
      let cur = moment(date).format('YYYY-MM-DD');
      let min = moment(minDate).format('YYYY-MM-DD');
      if (new Date(cur) < new Date(min)) {
        return true;
      }
    }
    return false;
  };

  return <div className={`align-col-middle w100 weekly-day-picker ${className}`}>
    <div className={'align-middle w100 header-view mb2'}>
      <div className={'cur-date flex_1'}>{moment(activeStartDay).format('MMM YYYY')}</div>
      <div className={'today-btn btn-style mr1'}
           onClick={() => {
             setActiveStartDay(new Date());
             setCurDate(new Date());
             onSelect(new Date());
           }}
      >Today
      </div>
      <div className={'align-middle nav-btn'}>
        <Button
          onClick={()=>{
            setActiveStartDay(moment(dates[0]).subtract(1, 'weeks').toDate());
          }}
        >
          <ChevronLeft size={26} color={Theme.colors.gray1}/>
        </Button>
        <Button
          onClick={()=>{
            setActiveStartDay(moment(dates[0]).add(1, 'weeks').toDate());
          }}
        >
          <ChevronRight size={26} color={Theme.colors.gray1}/>
        </Button>
      </div>
    </div>
    <div className={`align-middle w100`}>
      {
        dates.map((item, index) =>
          <div key={index} className={'align-col-middle day-btn-wrap'}>
            <div
              onClick={() => {
                if (!isPastDate(item)) {
                  setCurDate(item);
                  onSelect(item);
                }
              }}
              className={'align-col-middle day-btn'}
              style={{ backgroundColor: (item.getDate() == curDate.getDate() ? Theme.colors.primary : Theme.colors.white) }}
            >
              <div
                className={isPastDate(item) ? 'disabled-day' : item.getDate() == curDate.getDate() ? 'active-day' : 'inactive-day'}
              >
                {days[item.getDay()]}
              </div>
              <div
                className={isPastDate(item) ? 'disabled-date' : item.getDate() == curDate.getDate() ? 'active-date' : 'inactive-date'}
              >
                {item.getDate()}
              </div>
            </div>
          </div>
        )
      }
    </div>

  </div>;
};


WeeklyDayPicker.propTypes = {
  minDate: PropTypes.object,
  initialDate: PropTypes.object,
  className: PropTypes.string,
  onSelect: PropTypes.func
};
export default WeeklyDayPicker;
