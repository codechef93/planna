import { BOOKING_SET_PICKED_SLOTS } from '../actions/booking';

const initialState = {
  pickedSlots: [],
};

const booking = (state = initialState, action) => {
  switch (action.type) {
    case BOOKING_SET_PICKED_SLOTS:
      return { ...state, pickedSlots: action.payload || [] };
    default:
      return state;
  }
};

export default booking;
