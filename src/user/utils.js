import queryString from 'query-string';

export function getNextLocation() {
  const { next = '/' } = queryString.parse(location.search) || {};
  return next;
}
