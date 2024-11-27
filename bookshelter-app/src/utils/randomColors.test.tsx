import getRandomColor from './randomColor';

describe('getRandomColor', () => {
  test('should return a string that starts with # and has 7 characters', () => {
    const color = getRandomColor();

    expect(typeof color).toBe('string');

    expect(color.startsWith('#')).toBe(true);

    expect(color.length).toBe(7);
  });

  test('should return a valid hex color code', () => {
    const color = getRandomColor();

    const validHexPattern = /^#[0-9A-F]{6}$/i;
    expect(validHexPattern.test(color)).toBe(true);
  });
});
