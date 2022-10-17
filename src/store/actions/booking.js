export const BOOKING_SET_PICKED_SLOTS = 'BOOKING_SET_PICKED_SLOTS';

export const setBookingPickedSlots = (payload) => {
  return { type: BOOKING_SET_PICKED_SLOTS, payload: payload };
};
