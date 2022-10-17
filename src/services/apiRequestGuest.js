import axios from 'axios';
import Config from '../constants/config';

export default async request => { 
  request.method = request.method || 'get';
  request.url = `${Config.API_BASE_URL}/${request.url}`;

  console.log("== REQUEST API : ", request.url)

  request.data = request.data || {};
  if (request.data && request.method === 'get') {
    // If data is set the get request won't be made
    request.data = null;
  }

  request.headers = request.headers ||  {
    'Content-Type': 'application/json'
  };
 
  return axios(request);
};
