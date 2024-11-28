import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SkeletonInfoContent from '.';

describe('SkeletonSearchResults', () => {
  test('matches snapshots', () => {
    const { container } = render(<SkeletonInfoContent />);
    expect(container).toMatchSnapshot();
  });

  test('renders the correct number of skeleton items', () => {
    render(<SkeletonInfoContent />);

    const skeletonItem = screen.getByTestId('skeleton-item');

    expect(skeletonItem).toBeInTheDocument();
  });

  test('renders skeleton structure correctly', () => {
    render(<SkeletonInfoContent />);

    const skeleton = screen.getByTestId('skeleton-item');

    expect(
      skeleton.querySelector('.react-loading-skeleton')
    ).toBeInTheDocument();
  });
});
