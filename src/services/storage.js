import Cookies from 'universal-cookie';
import { createUUID } from '../utils/common';

const cookies = new Cookies();

export const KEYS = {
  LANGUAGE: 'plannapro-language',
  DEVICE_UNIQUE_KEY: 'plannapro-device-unique-id',
  APP_TOKEN: 'plannapro-app-token',
};

export const setAppToken = (token) => {
  let d = new Date();
  d.setTime(d.getTime() + 6 * 30 * 24 * 60 * 60 * 1000); // 6 months expiration
  cookies.set(KEYS.APP_TOKEN, token, { path: '/', expires: d });
};

export const clearAppToken = () => {
  let d = new Date('1970-01-01');
  cookies.remove(KEYS.APP_TOKEN, { path: '/', expires: d });
};

export const getAppToken = () => {
  return cookies.get(KEYS.APP_TOKEN);
};

export const getDeviceUniqueId = () => {
  let uniqueId = localStorage.getItem(KEYS.DEVICE_UNIQUE_KEY);
  if (uniqueId == null) {
    uniqueId = createUUID();
    localStorage.setItem(KEYS.DEVICE_UNIQUE_KEY, uniqueId);
  }
  return uniqueId;
};

export const getStorageKey = (key) => {
  let data = localStorage.getItem(key);
  if (data != null) {
    return JSON.parse(data);
  }
  return null;
};

export const setStorageKey = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeStorageKey = (key) => {
  localStorage.removeItem(key);
};