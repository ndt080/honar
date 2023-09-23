import urlJoin from 'url-join';

export function generateEndpointsPath(
  path: string,
  service: string,
  endpoints: Record<string, string>,
) {
  const dict: Record<string, string> = {};

  for (const key in endpoints) {
    dict[key] = urlJoin(path, service, endpoints[key]);
  }

  return dict;
}