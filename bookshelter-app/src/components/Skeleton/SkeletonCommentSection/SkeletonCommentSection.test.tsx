import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SkeletonCommentSection from '.';

describe('SkeletonSearchResults', () => {
  test('matches snapshots', () => {
    const { container } = render(<SkeletonCommentSection />);
    expect(container).toMatchSnapshot();
  });

  test('renders the correct number of skeleton items', () => {
    render(<SkeletonCommentSection />);

    const skeletonItem = screen.getByTestId('skeleton-item');

    expect(skeletonItem).toBeInTheDocument();
  });

  test('renders skeleton structure correctly', () => {
    render(<SkeletonCommentSection />);

    const skeleton = screen.getByTestId('skeleton-item');

    expect(
      skeleton.querySelector('.react-loading-skeleton')
    ).toBeInTheDocument();
  });
});
