import fetchMock from 'jest-fetch-mock';
import { get, getByID, edit } from './api';
import { API } from '../constants/api';
import { Book } from '../types';

interface FetchError {
  error: string;
}

const isFetchError = (result: unknown): result is FetchError => {
  return typeof result === 'object' && result !== null && 'error' in result;
};

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('Các hàm API', () => {
  test(' getByID return value when success', async () => {
    const mockData: Book = {
      id: '1',
      title: 'Test Book',
      author: 'Author',
      category: 'Fiction',
      publishedYear: 2021,
      publisher: 'Publisher',
      description: 'Description',
      cover: 'cover-url',
      comments: [],
    };
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const result = await getByID('/books', '1');
    expect(result).toEqual(mockData);
    expect(fetchMock).toHaveBeenCalledWith(
      `${API.BASE_URL}/books/1`,
      expect.any(Object)
    );
  });

  test('getByID return FetchError when fail', async () => {
    fetchMock.mockReject(new Error('Fetch error'));

    const result = await getByID('/books', '1');

    if (isFetchError(result)) {
      expect(result.error).toMatch(/Fetch error/);
    } else {
      fail('something went wrong');
    }
  });

  test(' edit return value when success', async () => {
    const mockData: Book = {
      id: '63d7755f50f3cca31911ea67',
      title: 'Nostrud commodo sint reprehenderit duis ad sit aute.',
      author: 'Naomi',
      category: 'contemporary',
      publishedYear: 2016,
      publisher: 'Liliana',
      description: 'Description text goes here.',
      cover: 'https://i.ibb.co/ZSRxJHH/book-1.png',
      comments: [],
    };
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const result = await edit(mockData, '/books', '1');
    expect(result).toEqual(mockData);
    expect(fetchMock).toHaveBeenCalledWith(
      `${API.BASE_URL}/books/1`,
      expect.any(Object)
    );
  });

  test('edit return fetchError when fail', async () => {
    const mockData: Book = {
      id: '63d7755f50f3cca31911ea67',
      title: 'Nostrud commodo sint reprehenderit duis ad sit aute.',
      author: 'Naomi',
      category: 'contemporary',
      publishedYear: 2016,
      publisher: 'Liliana',
      description: 'Description text goes here.',
      cover: 'https://i.ibb.co/ZSRxJHH/book-1.png',
      comments: [],
    };
    fetchMock.mockReject(new Error('Fetch error'));

    const result = await edit(mockData, '/books', '1');

    if (isFetchError(result)) {
      expect(result.error).toMatch(/Fetch error/);
    } else {
      fail('something went wrong');
    }
  });
});
