import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import LeftArrow from '../LeftArrow';

describe('LeftArrow Component', () => {
  test('matches snapshots', () => {
    const { container } = render(<LeftArrow />);
    expect(container).toMatchSnapshot();
  });

  test('renders without crashing', () => {
    const { container } = render(<LeftArrow />);
    expect(container).toBeInTheDocument();
  });

  test('has the correct SVG structure', () => {
    const { container } = render(<LeftArrow />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '12');
    expect(svg).toHaveAttribute('height', '8');
    expect(svg).toHaveAttribute('viewBox', '0 0 12 8');

    const path = svg?.querySelector('path');
    expect(path).toBeInTheDocument();
  });

  test('renders the arrow down correctly', () => {
    const { container } = render(<LeftArrow />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});
