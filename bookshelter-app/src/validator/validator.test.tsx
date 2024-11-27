import { validateForm } from './validator';

describe('validateForm', () => {
  test('should return an empty object when both name and comment are provided', () => {
    const result = validateForm('John Doe', 'This is a comment');

    expect(result).toEqual({});
  });

  test('should return a validation error when name is missing', () => {
    const result = validateForm('', 'This is a comment');

    expect(result).toEqual({ name: 'Name is required' });
  });

  test('should return a validation error when comment is missing', () => {
    const result = validateForm('John Doe', '');

    expect(result).toEqual({ comment: 'Comment is required' });
  });

  test('should return both validation errors when both fields are missing', () => {
    const result = validateForm('', '');

    expect(result).toEqual({
      name: 'Name is required',
      comment: 'Comment is required',
    });
  });
});
