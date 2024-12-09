import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import LogoPage from '../Logo';

describe('LogoPage Component', () => {
  test('matches snapshots', () => {
    const { container } = render(<LogoPage width="54" height="44" />);
    expect(container).toMatchSnapshot();
  });

  test('render without crashing', () => {
    const { container } = render(<LogoPage width="54" height="44" />);
    expect(container).toBeInTheDocument();
  });

  test('renders the arrow down correctly', () => {
    const { container } = render(<LogoPage width="54" height="44" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  test('has correct SVG structure', () => {
    const { container } = render(<LogoPage width="54" height="44" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '54');
    expect(svg).toHaveAttribute('height', '44');
    expect(svg).toHaveAttribute('viewBox', '0 0 54 44');

    const rect = svg?.querySelector('rect');
    expect(rect).toBeInTheDocument();
  });
});
