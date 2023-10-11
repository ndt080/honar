import { generateEndpointsPath } from '@shared/helpers';
import qs from 'qs';

const BASE_PATH = import.meta.env.VITE_API_URL;
const API_SERVICE = 'api';
const BASE_QUERY = qs.stringify({ populate: { image: { fields: ['url'] } } });

const BASE_ENDPOINTS = {
  ARTICLE_LIST: `articles?${BASE_QUERY}`, // GET
  LATEST_ARTICLE_LIST: `latest-articles??${BASE_QUERY}`, // GET
  ARTICLE: `articles/:id??${BASE_QUERY}`, // GET
};

export const ENDPOINTS = generateEndpointsPath(
  BASE_PATH,
  API_SERVICE,
  BASE_ENDPOINTS,
) as typeof BASE_ENDPOINTS;