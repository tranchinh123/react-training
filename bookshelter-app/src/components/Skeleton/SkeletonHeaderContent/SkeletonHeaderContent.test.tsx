import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SkeletonHeaderContent from '.';

describe('SkeletonSearchResults', () => {
  test('matches snapshots', () => {
    const { container } = render(<SkeletonHeaderContent />);
    expect(container).toMatchSnapshot();
  });

  test('should renders the correct number of skeleton items', () => {
    render(<SkeletonHeaderContent />);

    const skeletonItem = screen.getByTestId('skeleton-item');

    expect(skeletonItem).toBeInTheDocument();
  });

  test('should renders skeleton structure correctly', () => {
    render(<SkeletonHeaderContent />);

    const skeleton = screen.getByTestId('skeleton-item');

    expect(
      skeleton.querySelector('.react-loading-skeleton')
    ).toBeInTheDocument();
  });
});
