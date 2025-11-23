export const API_BASE_URL = '/api/v1';

interface RequestOptions extends RequestInit {
  signal?: AbortSignal;
}

export async function apiRequest<TResponse>(
  path: string,
  options: RequestOptions = {}
): Promise<TResponse> {
  const url = `${API_BASE_URL}${path}`;

  const response = await fetch(url, {
    ...options
  });

  if (!response.ok) {
    throw new Error('Ошибка при запросе к серверу');
  }

  return response.json() as Promise<TResponse>;
}
