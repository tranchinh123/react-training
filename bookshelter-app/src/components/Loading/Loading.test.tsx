import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loading from '.';

describe('Loading Component', () => {
  test('matches snapshots', () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });

  test('should render LoadingComponent without crashing', () => {
    const { container } = render(<Loading />);
    expect(container).toBeInTheDocument();
  });

  test('should has correct class names', () => {
    const { container } = render(<Loading />);
    expect(container.firstChild).toHaveClass('modal');

    const loader = container.querySelector('.loader');
    expect(loader).toBeInTheDocument();
  });
});
