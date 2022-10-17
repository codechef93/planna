import React, {useState, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from '@styled-icons/typicons';
import './index.css';
import { setBookingPickedSlots } from '../../../store/actions/booking';
import { Theme } from '../../../assets';
import { MainBtn, RoundIconBtn, OutlineBtn } from '../../../components/Buttons';
import { ROUTES_NAMES } from '../../../constants';
import PickedSlot from '../../../components/Home/PickedSlot';
import ConfirmModal from '../../../components/Modals/ConfirmModal';
import BookingService from '../../../services/apiBooking';
import {BOOKING_NEW} from '../../../constants/common'
import { showAlert } from '../../../utils/alerts';

const ConfirmBooking = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { curService, proData } = useSelector(state => state.pro);
  const { pickedSlots } = useSelector(state => state.booking);

  const [isConfirmModal, showConfirmModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const _targetSlot = useRef(null);

  const onContinue = () => {
    let request_data = {
      status: BOOKING_NEW,
      description: '',
      service: { id: curService.id },
      slots: pickedSlots
    }
    console.log('booking request ', request_data)
    setLoading(true);
    BookingService.createBookRequest(request_data)
      .then(({ data }) => {
        console.log('create BookRequest ', data);
        setLoading(false);
        navigate(ROUTES_NAMES.bookingDone);
      })
      .catch((err) => {
        setLoading(false);
        showAlert(null, 'Something went wrong.')
        console.log('create BookRequest err ', err);
      });
  };

  const onDeleteSlot=(slot) => {
    console.log('delete slot ', slot)
    let clone = pickedSlots.slice(0);
    clone = clone.filter(s => s.start != slot.start);

    dispatch(setBookingPickedSlots(clone));
  }

  return (
    <div className={'align-col-middle confirm-booking-view'}>
      <div className={'row'}>
        <div className={'align-middle head-nav'}>
          <RoundIconBtn
            icon={<ArrowLeft size={18} color={Theme.colors.gray1}/>}
            onClick={() => navigate(-1)}
          />
          <h5>Confirm Appointment details</h5>
        </div>
      </div>
      <div className={'row mt4 ph1'}>
        <p className={'subject-title'}>Suggested Appointment Slot/s</p>
      </div>
      <div className={'row'}>
        {
          pickedSlots.map((slot, index) =>
            <PickedSlot
              key={index}
              slot={slot}
              onEdit={() => {
                navigate(`/${proData?.user?.login}/` + ROUTES_NAMES.editSlot + `?start=${slot.start}&end=${slot.end}`);
              }}
              onDelete={() => {
                _targetSlot.current = slot;
                showConfirmModal(true);
              }}
            />
          )
        }
      </div>
      <div className={'flex_1 row bottom mt4'}>
        <OutlineBtn
          className={'cancel-btn'}
          title={'Cancel'}
          onClick={() => navigate(-1)}
        />
        <div style={{ width: 10 }}/>
        <MainBtn
          isLoading={isLoading}
          className={'continue-btn'}
          title={'Send Booking Request'}
          onClick={onContinue}
        />
      </div>
      <ConfirmModal
        showModal={isConfirmModal}
        title={'Delete Slot'}
        message={'Are you sure you want to delete this slot?'}
        onClose={()=> showConfirmModal(false)}
        onYes={() => {
          showConfirmModal(false);
          onDeleteSlot(_targetSlot.current);
        }}
      />
    </div>
  );
};

export default  ConfirmBooking ;
