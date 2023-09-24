import { generateEndpointsPath } from '@shared/helpers';

const BASE_PATH = import.meta.env.VITE_API_URL;
const API_SERVICE = 'api/collections';

const BASE_ENDPOINTS = {
  PARTNER_LIST: 'partners/records', // GET
  PARTNER: 'partners/records/:id', // GET
};

export const ENDPOINTS = generateEndpointsPath(
  BASE_PATH,
  API_SERVICE,
  BASE_ENDPOINTS,
) as typeof BASE_ENDPOINTS;