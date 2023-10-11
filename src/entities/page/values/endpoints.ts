import { generateEndpointsPath } from '@shared/helpers';
import qs from 'qs';

const BASE_PATH = import.meta.env.VITE_API_URL;
const API_SERVICE = 'api';
const BASE_QUERY = qs.stringify({ populate: 'deep' }, { encodeValuesOnly: true });

const BASE_ENDPOINTS = {
  PAGE_LIST: `pages?${BASE_QUERY}`, // GET
  PAGE: `pages?filters[navigation][path]=:path&${BASE_QUERY}`, // GET
};

export const ENDPOINTS = generateEndpointsPath(
  BASE_PATH,
  API_SERVICE,
  BASE_ENDPOINTS,
) as typeof BASE_ENDPOINTS;