import apiRequest from './apiRequestGuest';

const GET = 'GET';
const POST = 'POST';
// const DELETE = 'DELETE';
// const PUT = 'PUT';
const PATCH = 'PATCH';

const API_LIST = {
  requests: 'pro-requests',
  requests_user: 'pro-requests/user',
  requestsDetails : 'pro-requests/#id',
};

const BookingService = { 
  Detail(id) {
    return apiRequest({
      url: API_LIST.requestsDetails.replace('#id', id),
      method: GET,
    });
  },
  update(id, data) {
    return apiRequest({
      url: API_LIST.requestsDetails.replace('#id', id),
      method: PATCH,
      data: data
    });
  },
  createBookRequest(data) {
    return apiRequest({
      url: API_LIST.requests,
      method: POST,
      data: JSON.stringify(data),
    });
  },
  myBookings() {
    return apiRequest({
      url: API_LIST.requests_user,
      method: GET,
    });
  },
};

export default BookingService;
