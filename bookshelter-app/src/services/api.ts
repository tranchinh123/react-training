import { Books } from '../types/index';
import { API } from '../constants/api';

const get = async <T>(
  endPoint: string,
  datatype: string
): Promise<T | void> => {
  try {
    const response = await fetch(`${API.BASE_URL}${endPoint}`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    });
    if (response.ok) {
      const data = await response.json();
      if (datatype === 'books') {
        return data as T;
      } else if (datatype === 'categories') {
        return data as T;
      }
    }
  } catch (error) {
    console.error('Failed to fetch data ', error);
  }
};

const getByID = async (endPoint: string, id: string): Promise<Books | void> => {
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
