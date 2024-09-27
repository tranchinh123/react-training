import { Book } from '../types/index';
import { API } from '../constants/api';

const get = async <T>(
  endPoint: string,
  param: string = '',
  value: string = ''
): Promise<T | void> => {
  const url = new URL(`${API.BASE_URL}${endPoint}`);
  if (param) url.searchParams.append(param, value);

  try {
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    });
    if (response.ok) {
      const data = await response.json();
      return data as T;
    }
  } catch (error) {
    console.error('Failed to fetch data ', error);
  }
};

const getByID = async (endPoint: string, id: string): Promise<Book | void> => {
  try {
    const response = await fetch(`${API.BASE_URL}${endPoint}/${id}`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('Failed to fetch data ', error);
  }
};

export { get, getByID };
