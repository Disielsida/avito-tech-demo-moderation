export const ROUTES = {
  ADS_LIST: '/list',
  STATS: 'stats',
  ADDETAILS: (id: number | string) => `/item${id}`
} as const;
