import { generateEndpointsPath } from '@shared/helpers';

const BASE_PATH = import.meta.env.VITE_API_URL;
const API_SERVICE = 'api/collections';

const BASE_ENDPOINTS = {
  MENU_LIST: 'navigation/records', // GET
  MENU_ITEM: 'navigation/records/:id', // GET
};

export const ENDPOINTS = generateEndpointsPath(
  BASE_PATH,
  API_SERVICE,
  BASE_ENDPOINTS,
) as typeof BASE_ENDPOINTS;