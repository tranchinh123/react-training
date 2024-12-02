import { Book } from '../types/index';
import { API } from '../constants/api';

interface FetchError {
  error: string;
}

const get = async <T>(
  endPoint: string,
  param: string = '',
  value: string = ''
): Promise<T[] | FetchError> => {
  const url = new URL(`${API.BASE_URL}${endPoint}`);
  if (param) url.searchParams.append(param, value);

  try {
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    });

    if (response.ok) {
      const data = await response.json();
      return data as T[];
    } else {
      return { error: `Error: ${response.status} ${response.statusText}` };
    }
  } catch (error) {
    return {
      error: `Fetch error: ${error instanceof Error ? error.message : 'Unknown error'}`,
    };
  }
};

const getByID = async (
  endPoint: string,
  id: string
): Promise<Book | FetchError> => {
  try {
    const response = await fetch(`${API.BASE_URL}${endPoint}/${id}`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return { error: `Error: ${response.status} ${response.statusText}` };
    }
  } catch (error) {
    return {
      error: `Fetch error: ${error instanceof Error ? error.message : 'Unknown error'}`,
    };
  }
};

const edit = async (
  data: Book,
  endPoint: string,
  id: string
): Promise<void | FetchError> => {
  try {
    const response = await fetch(`${API.BASE_URL}${endPoint}/${id}`, {
      method: 'PUT', // or PATCH
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return { error: `Error: ${response.status} ${response.statusText}` };
    }
  } catch (error) {
    return {
      error: `Fetch error: ${error instanceof Error ? error.message : 'Unknown error'}`,
    };
  }
};

export { get, getByID, edit };
