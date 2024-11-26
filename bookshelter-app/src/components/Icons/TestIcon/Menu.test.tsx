import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Menu from '../Menu';

describe('Menu Component', () => {
  test('matches snapshots', () => {
    const { container } = render(<Menu />);
    expect(container).toMatchSnapshot();
  });

  test('render without crashing', () => {
    const { container } = render(<Menu />);
    expect(container).toBeInTheDocument();
  });

  test('renders the arrow down correctly', () => {
    const { container } = render(<Menu />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  test('has correct SVG structure', () => {
    const { container } = render(<Menu />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '28');
    expect(svg).toHaveAttribute('height', '31');
    expect(svg).toHaveAttribute('viewBox', '0 0 28 31');

    const path = svg?.querySelector('path');
    expect(path).toBeInTheDocument();
  });
});
