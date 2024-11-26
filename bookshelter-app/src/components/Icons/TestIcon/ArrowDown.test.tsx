import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArrowDown from '../ArrowDown';

describe('ArrowDown Component', () => {
  test('matches snapshots', () => {
    const { container } = render(<ArrowDown />);
    expect(container).toMatchSnapshot();
  });

  test('renders without crashing', () => {
    const { container } = render(<ArrowDown />);
    expect(container).toBeInTheDocument();
  });

  test('has the correct SVG structure', () => {
    const { container } = render(<ArrowDown />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '26');
    expect(svg).toHaveAttribute('height', '32');
    expect(svg).toHaveAttribute('viewBox', '0 0 26 32');

    const path = svg?.querySelector('path');
    expect(path).toBeInTheDocument();
    expect(path).toHaveAttribute('fill-rule', 'evenodd');
    expect(path).toHaveAttribute('clip-rule', 'evenodd');
  });

  test('renders the arrow down correctly', () => {
    const { container } = render(<ArrowDown />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});
