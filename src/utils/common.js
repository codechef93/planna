import moment from 'moment';

// eslint-disable-next-line no-unused-vars
export const PrintLog = (object) => {
  console.log(object);
};

export const createUUID = () => {
  let s = [];
  let hexDigits = '0123456789ABCDEF';
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-';

  let uuid = s.join('');
  return uuid;
};

export const validateEmailAddress = (email) => {
  let reg =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
};

export const isFullURL = (str) => {
  if (str == null) {
    return false;
  }
  return str.includes('http');
};

export const isEmpty = (string) => {
  if (string != null && string.length > 0) {
    return false;
  }
  return true;
};

export const ucFirst = (str) => {
  if (str == null || str == "") { return '' }
  return str.split(" ").map(s => s.charAt(0).toUpperCase() + s.substr(1).toLowerCase()).join(" ")
}

export const convertTimestamp2Date = (timestamp) => {
  if (timestamp == null) return new Date();
  return new Date(timestamp.seconds * 1000);
};

export const convertTimeString2Hours = (time) => {
  if (time) {
    let tmpArray = time.split(':');
    if (tmpArray.length == 1) {
      return parseInt(tmpArray[0]);
    } else if (tmpArray.length > 1) {
      return parseInt(tmpArray[0]) + parseInt(tmpArray[1]) / 60;
    }
  }
  return 0;
};

export const minutes2Days = (minutes) => {
  if (minutes == null) { return [] }
  const d = parseInt(minutes / (60 * 24));
  const h = parseInt((minutes % (60 * 24)) / 60);
  const m = parseInt(minutes % 60);

  return [d, h, m];
}

export const getHourMin = (timestring) => {
  if (timestring == null) { return '' }
  let tmp = timestring.split(':');
  if (tmp.length > 1) {
    return tmp[0] + ':' + tmp[1];
  }
  return '';
}

export const seconds2Time = (seconds) => {
  // const h = parseInt(seconds / (60 * 60));
  const m = parseInt((seconds % (60 * 60)) / 60);
  const s = parseInt(seconds % 60);

  return (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
  // return ((h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s));
};

export const checkInSameWeek = (date = new Date()) => {
  let week_days = [];
  let today = new Date();
  let day_week = today.getDay();
  for (let i = -day_week; i < 0; i++) {
    week_days.push(moment(today).add(i, 'days').format('DD/MM/YYYY'));
  }
  for (let i = 0; i < 7 - day_week; i++) {
    week_days.push(moment(today).add(i, 'days').format('DD/MM/YYYY'));
  }
  return week_days.includes(moment(date).format('DD/MM/YYYY'));
};
  
export const openExternalUrl = (url) => {
  try {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
    // eslint-disable-next-line no-empty
  } catch (error) {}
};

export const getWeekDays = (date = new Date()) => {
  let dates = [];
  let day = date.getDay();
  for (let i = -day; i < (7 - day); i++) {
    let tmp = moment(date).add(i, 'days').toDate();
    dates.push(tmp);
  }
  return dates;
}