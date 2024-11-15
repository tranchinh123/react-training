import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WrappedUserComments from '.';

describe('UserComment Component', () => {
  test('Render correctly with given props', () => {
    render(<WrappedUserComments />);
  });
});
