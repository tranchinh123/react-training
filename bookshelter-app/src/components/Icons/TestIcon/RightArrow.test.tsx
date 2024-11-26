import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import RightArrow from '../RightArrow';

describe('Menu Component', () => {
  test('matches snapshots', () => {
    const { container } = render(<RightArrow />);
    expect(container).toMatchSnapshot();
  });

  test('render without crashing', () => {
    const { container } = render(<RightArrow />);
    expect(container).toBeInTheDocument();
  });

  test('renders the arrow down correctly', () => {
    const { container } = render(<RightArrow />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  test('has correct SVG structure', () => {
    const { container } = render(<RightArrow />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '22');
    expect(svg).toHaveAttribute('height', '8');
    expect(svg).toHaveAttribute('viewBox', '0 0 22 8');

    const path = svg?.querySelector('path');
    expect(path).toBeInTheDocument();
  });
});
