import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Close from '../Close';

describe('Close Component', () => {
  test('matches snapshots', () => {
    const { container } = render(<Close width="15px" height="15px" />);
    expect(container).toMatchSnapshot();
  });

  test('render without crashing', () => {
    const { container } = render(<Close width="15px" height="15px" />);
    expect(container).toBeInTheDocument();
  });

  test('renders the arrow down correctly', () => {
    const { container } = render(<Close width="15px" height="15px" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  test('has correct SVG structure', () => {
    const { container } = render(<Close width="15px" height="15px" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '15px');
    expect(svg).toHaveAttribute('height', '15px');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');

    const path = svg?.querySelector('path');
    expect(path).toBeInTheDocument();
  });
});
