import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Glass from '../Glass';

describe('Glass Component', () => {
  test('matches snapshots', () => {
    const { container } = render(<Glass />);
    expect(container).toMatchSnapshot();
  });

  test('renders without crashing', () => {
    const { container } = render(<Glass />);
    expect(container).toBeInTheDocument();
  });

  test('has the correct SVG structure', () => {
    const { container } = render(<Glass />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '22');
    expect(svg).toHaveAttribute('height', '22');
    expect(svg).toHaveAttribute('viewBox', '0 0 22 22');

    const path = svg?.querySelector('path');
    expect(path).toBeInTheDocument();
  });

  test('renders the arrow down correctly', () => {
    const { container } = render(<Glass />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});
