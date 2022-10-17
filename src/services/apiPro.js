import apiRequest from './apiRequestGuest';

const GET = 'GET';
const POST = 'POST';
// const DELETE = 'DELETE';
// const PUT = 'PUT';

const API_LIST = {
  getProList: 'pros',
  getProDetail: 'pros/#id',
  getProServices: 'pro-services/user/#proid',
  proService: 'pro-services/#id',
};

const ProService = {
  AllPros(page = 0, perPage = 20) {
    return apiRequest({ url: `pros?page=${page}&size=${perPage}`, method: GET });
  },
  ProDetail(proId) {
    return apiRequest({
      url: API_LIST.getProDetail.replace('#id', proId),
      method: GET,
    });
  },
  ProDetailFromLogin(login) {
    return apiRequest({
      url: `pros/login/${login}`,
      method: GET,
    });
  },
  getProServices(proId) {
    return apiRequest({
      url: API_LIST.getProServices.replace('#proid', proId),
      method: GET,
    });
  },
  serviceDetail(id) {
    return apiRequest({
      url: API_LIST.proService.replace('#id', id),
      method: GET,
    });
  },
  serviceAvailableSlotsForaDay(service_id, data) {
    return apiRequest({
      url: `pro-services/slots/${service_id}`,
      method: POST,
      data : JSON.stringify(data)
    });
  },
  getAssetsUser(user_id, tags) {
    let body = {
      userid : user_id
    };
    if (tags != null && tags.length > 0) {
      body.tags = tags.map(i => ({ id: i.id }));
    }

    console.log('findDocuments ', body)

    return apiRequest({
      url: 'assets/user',
      method: POST,
      data: body,
    });
  },
};

export default ProService;
