import { NORMAL_BUSINESS_HOUR } from '../constants/common';

export const getRate = (service, rateType = NORMAL_BUSINESS_HOUR) => {
  if (service?.rates != null) {
    let index = service?.rates.findIndex(r => r.type == rateType);
    if (index != -1) {
      return service?.rates[index];
    }
  }
  return null;
};