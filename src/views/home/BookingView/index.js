import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import querystring from 'query-string';
import { useNavigate, useLocation } from 'react-router-dom';
import './index.css';
import { setBookingPickedSlots } from '../../../store/actions/booking';
import { Timeslot, EventDatePicker } from '../../../components/Home';
import { MainBtn, OutlineBtn } from '../../../components/Buttons';
import { ROUTES_NAMES } from '../../../constants';
import ProService from '../../../services/apiPro';
import LoadingSpinner from '../../../components/Spinner';
import NoSlots from '../../../components/Empty/NoSlots';
import { showAlert } from '../../../utils/alerts';

const BookingView = (props) => {
  const isEditSlot = props.isEditSlot || false;
  const navigate = useNavigate();
  const location = useLocation();
  const parsed = querystring.parse(location.search) || {};
  const dispatch = useDispatch();
  const { curService, proData } = useSelector(state => state.pro);
  const { pickedSlots } = useSelector(state => state.booking);

  const [tmSlots, setTimeSlots] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [isLoading, setLoading] = useState(null);

  useEffect(() => {
    if (curService?.id != null) {
      setLoading(true);
      ProService.serviceAvailableSlotsForaDay(curService?.id, {
        start: curDate,
        end: curDate
      })
        .then(({ data }) => {
          let slots = data?.slots || [];
          slots = slots.filter(a => new Date(a.start) >= new Date());
          slots.sort((a, b) => new Date(a.start) - new Date(b.start));
          setTimeSlots(slots);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log('serviceDetail err ', err);
        });
    }
  }, [curService?.id, curDate]);

  useEffect(() => {
    if (isEditSlot && parsed.start && parsed.end) {
      let start = moment(parsed.start).toDate();
      setCurDate(start);
      setSelectedSlots([{
        start : parsed.start,
        end : parsed.end
      }]);
    }
  }, [parsed.start && parsed.end]);

  const onContinue = () => {
    if (selectedSlots.length == 0) {
      return showAlert(null, 'You need to select at least a slot!');
    }

    if (isEditSlot) {
      let tmp = pickedSlots.slice(0);
      let index = tmp.findIndex(s => s.start == parsed.start && s.end == parsed.end);
      if (index != -1) {
        tmp[index] = selectedSlots[0];
      }
      dispatch(setBookingPickedSlots(tmp));
      navigate(`/${proData?.user?.login}/` + ROUTES_NAMES.confirmBooking);
    } else {
      dispatch(setBookingPickedSlots(selectedSlots));
      navigate(`/${proData?.user?.login}/` + ROUTES_NAMES.addPaymentInfo);
    }
  };

  console.log('booking view ', (tmSlots.length > 0 ? tmSlots[0] : ''), curDate);
  const _renderSlots = () => {
    if (isLoading == true) {
      return (
        <div className={'list ph2'}>
          <LoadingSpinner/>
        </div>
      );
    }
    if (isLoading == false) {
      if (tmSlots.length == 0) {
        return (
          <div className={'list ph2'}>
            <NoSlots/>
          </div>
        );
      } else {
        return (
          <div className={'list ph2'}>
            {tmSlots.map((slot, index) =>
              <Timeslot
                key={index}
                slot={slot}
                isSelected={selectedSlots.findIndex(s => (
                  s.start == slot.start && s.end == slot.end
                )) != -1}
                onSelect={(slot) => {
                  if (isEditSlot) {
                    slot.daysofweek = '' + curDate.getDay();
                    let tmp = [];
                    tmp.push(slot);
                    setSelectedSlots(tmp);
                  } else {
                    let tmp = selectedSlots.slice(0);
                    let index = tmp.findIndex(s => s.start == slot.start && s.end == slot.end);
                    if (index != -1) {
                      tmp.splice(index, 1);
                      setSelectedSlots(tmp);
                    } else {
                      if (selectedSlots.length < 5) {
                        slot.daysofweek = '' + curDate.getDay();
                        tmp.push(slot);
                        setSelectedSlots(tmp);
                      } else {
                        return showAlert(null, 'You can select up to 5 slots!');
                      }
                    }
                  }
                }}
              />
            )}
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className={'align-col-middle booking-view'}>
      <div className={'row pb3'}>
        <div className={'date-picker-view pr4'}>
          <EventDatePicker
            isEditSlot={isEditSlot}
            initDate={curDate}
            onSelectDate={(date) => {
              setCurDate(date);
            }}
          />
        </div>
        <div className={'align-col-middle timeslots'}>
          <p className={'date'}>{moment(curDate).format('MMM DD, YYYY')}</p>
          {_renderSlots()}
        </div>
      </div>
      {
        isEditSlot ?
          <div className={'flex_1 row bottom'}>
            <OutlineBtn
              className={'cancel-btn'}
              title={'Cancel'}
              onClick={() => {
                navigate(-1);
                // navigate(ROUTES_NAMES.home + ROUTES_NAMES.confirmBooking)
              }}
            />
            <div style={{ width: 10 }}/>
            <MainBtn
              className={'save-btn'}
              title={'Save'}
              onClick={onContinue}
            />
          </div>
          :
          <div className={'flex_1 row bottom'}>
            <MainBtn
              isDisabled={selectedSlots.length == 0}
              className={'continue-btn'}
              title={'Continue'}
              onClick={onContinue}
            />
          </div>
      }
    </div>
  );
};

BookingView.propTypes = {
  isEditSlot: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
};

export default  BookingView;
