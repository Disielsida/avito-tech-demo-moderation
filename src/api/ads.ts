import type { AdStatus, AdsListResponse } from '@models/ads';
import { apiRequest } from '@api/client';

export interface GetAdsParams {
  page?: number;
  limit?: number;
  status?: AdStatus[];
  categoryId?: number;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  sortBy?: 'createdAt' | 'price' | 'priority';
  sortOrder?: 'asc' | 'desc';
}

export const getAds = async (
  params: GetAdsParams,
  signal?: AbortSignal
): Promise<AdsListResponse> => {
  const searchParams = new URLSearchParams();

  searchParams.set('page', String(params.page ?? 1));
  searchParams.set('limit', String(params.limit ?? 10));

  if (params.status && params.status.length > 0) {
    params.status.forEach((status) => searchParams.append('status', status));
  }

  if (params.categoryId != null) {
    searchParams.set('categoryId', String(params.categoryId));
  }

  if (params.minPrice != null) {
    searchParams.set('minPrice', String(params.minPrice));
  }

  if (params.maxPrice != null) {
    searchParams.set('maxPrice', String(params.maxPrice));
  }

  if (params.search) {
    searchParams.set('search', params.search);
  }

  if (params.sortBy) {
    searchParams.set('sortBy', params.sortBy);
  }

  if (params.sortOrder) {
    searchParams.set('sortOrder', params.sortOrder);
  }

  return apiRequest<AdsListResponse>(`/ads?${searchParams.toString()}`, {
    signal
  });
};
