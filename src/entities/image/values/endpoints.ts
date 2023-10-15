import { generateEndpointsPath } from '@shared/helpers';

const BASE_PATH = import.meta.env.VITE_API_URL;
const API_SERVICE = 'api';

const BASE_ENDPOINTS = {
  GALLERY_LIST: 'gallery', // GET / POST
  GALLERY_PREVIEW: 'gallery-preview', // GET / PUT / DELETE
};

export const ENDPOINTS = generateEndpointsPath(
  BASE_PATH,
  API_SERVICE,
  BASE_ENDPOINTS,
) as typeof BASE_ENDPOINTS;