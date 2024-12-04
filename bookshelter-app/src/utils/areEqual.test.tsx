import { areEqual } from './areEqual';
import isEqual from 'react-fast-compare';

describe('areEqual', () => {
  test('should return true for equal objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };

    expect(areEqual(obj1, obj2)).toBe(true);
  });

  test('should return false for unequal objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 2, b: 3 };

    expect(areEqual(obj1, obj2)).toBe(false);
  });

  test('should handle primitive types', () => {
    expect(areEqual(1, 1)).toBe(true);
    expect(areEqual(1, 2)).toBe(false);
    expect(areEqual('test', 'test')).toBe(true);
    expect(areEqual('test', 'Test')).toBe(false);
  });

  test('should handle arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    const arr3 = [1, 2, 4];

    expect(areEqual(arr1, arr2)).toBe(true);
    expect(areEqual(arr1, arr3)).toBe(false);
  });
});
