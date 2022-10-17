import React, {useEffect, useState } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import ProCalendar from '../ProCalendar';
import WeeklyDayPicker from '../WeeklyDaypicker';
import { CommonTabs } from '../../TabSelector';
import { QuestionCircleFill } from '@styled-icons/bootstrap';
import { Theme } from '../../../assets';

const EventDatePicker = ({ isEditSlot, initDate, minDate, className, onSelectDate }) => {
  const [type, setViewType] = useState('Week');
  const [curDate, setCurDate] = useState(initDate);

  useEffect(()=>{
    setCurDate(initDate)
  }, [initDate])

  const onChangeDate = (date) => {
    setCurDate(date);
    onSelectDate(date);
  };

  return (
    <div className={'w100 align-col-middle event-date-picker ' + className}>
      <div className={'w100 align-middle mb2'}>
        {
          isEditSlot ? <h5 className={'flex_1 mr2'}>Edit Slot</h5>
            :
            <h5 className={'flex_1 mr2'}><span>Select up to 5 Time Slots </span>
              <QuestionCircleFill className={'hide-md-question-mark'} style={{ marginBottom: 4 }} size={20}
                                  color={Theme.colors.gray1}/>
              <QuestionCircleFill className={'show-md-question-mark'} style={{ marginBottom: 4 }} size={16}
                                  color={Theme.colors.gray1}/>
            </h5>
        }
        <CommonTabs
          className={'week-month-tab'}
          items={['Week', 'Month']}
          item={type}
          onChange={(v) => setViewType(v)}
        />
      </div>
      <div className={'w100 hide-md'}>
        <ProCalendar
          minDate={minDate}
          curDate={curDate}
          onSelectDate={onChangeDate}
        />
      </div>
      <div className={'w100 show-md'}>
        {
          type == 'Month' ?
            <ProCalendar
              minDate={minDate}
              curDate={curDate}
              onSelectDate={onChangeDate}
            />
            :
            <WeeklyDayPicker
              minDate={minDate}
              initialDate={curDate}
              onSelect={onChangeDate}
            />
        }
      </div>
    </div>
  );
};

EventDatePicker.propTypes = {
  isEditSlot: PropTypes.bool,
  initDate: PropTypes.object,
  minDate: PropTypes.object,
  className: PropTypes.string,
  onSelectDate: PropTypes.func
};

export default EventDatePicker;
