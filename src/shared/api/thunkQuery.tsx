import axios from 'axios';
import { HTTP_HOST } from 'shared/consts';
import { Params, ThunkAxiosParams } from './types';

export const queryBuilder = (path: string, params: Params): string => {
  const url = new URL(path, HTTP_HOST);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.set(key, value.toString());
    }
  });
  return url.toString();
};

const abortControllers: Record<string, AbortController> = {};

export const thunkAxiosRequest = async ({
  path = '',
  params = {},
  rejectWithValue,
  headers = {},
  method = 'get',
  abortWithParams = false,
}: ThunkAxiosParams) => {
  if (!navigator.onLine) {
    return rejectWithValue({
      status: 0,
      message: 'Ошибка сети',
      code: 'ERR_NETWORK',
    });
  }

  const queryUrl = queryBuilder(path, params);
  const url = method === 'get' ? queryUrl : `${HTTP_HOST}${path}`;
  const requestKey = abortWithParams
    ? `${method}-${queryUrl}`
    : `${method}-${path}`;

  if (abortControllers[requestKey]) {
    abortControllers[requestKey].abort();
  }

  const controller = new AbortController();
  abortControllers[requestKey] = controller;

  try {
    const config = {
      headers,
      signal: controller.signal,
      ...(method !== 'get' && { data: params }),
    };

    const response = await axios({
      url,
      method,
      ...config,
    });

    if (!response?.data) {
      throw new Error('Получен пустой ответ от сервера.');
    }

    delete abortControllers[requestKey]; // Убираем контроллер после завершения запроса.
    return response.data;
  } catch (error: any) {
    delete abortControllers[requestKey];

    if (axios.isAxiosError(error) && error.code !== 'ERR_CANCELED') {
      return rejectWithValue({
        status: error.response?.status || 500,
        message: error.message,
        code: error.code,
      });
    }

    throw error;
  }
};
