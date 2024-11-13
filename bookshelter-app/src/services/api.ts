import { Book } from '../types/index';
import { API } from '../constants/api';

const get = async <T>(
  endPoint: string,
  param: string = '',
  value: string = '',
  showToast: (message: string, type: 'success' | 'error') => void
): Promise<T[] | void> => {
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
    }
  } catch (error) {
    showToast('Failed to fetch data ', 'error');
    console.error('Failed to fetch data ', error);
  }
};

const getByID = async (
  endPoint: string,
  id: string,
  showToast: (message: string, type: 'success' | 'error') => void
): Promise<Book | void> => {
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
    showToast('Failed to fetch data to get book', 'error');
    console.error('Failed to fetch data to get book', error);
  }
};

const edit = async (
  data: Book,
  endPoint: string,
  id: string,
  showToast: (message: string, type: 'success' | 'error') => void
): Promise<void> => {
  try {
    const response = await fetch(`${API.BASE_URL}${endPoint}/${id}`, {
      method: 'PUT', // or PATCH
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const data = await response.json();
      showToast('Success add a comment', 'success');
      return data;
    }
  } catch (error) {
    showToast('Failed to fetch data to post', 'error');
    console.error('Something went wrong', error);
  }
};

export { get, getByID, edit };
