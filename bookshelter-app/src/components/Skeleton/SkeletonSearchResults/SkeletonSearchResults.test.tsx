import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SkeletonSearchResults from '.';

describe('SkeletonSearchResults', () => {
  test('matches snapshots', () => {
    const { container } = render(<SkeletonSearchResults />);
    expect(container).toMatchSnapshot();
  });

  test('should renders the correct number of skeleton items', () => {
    render(<SkeletonSearchResults />);

    const skeletonItems = screen.getAllByTestId('skeleton-item');

    expect(skeletonItems.length).toBe(4);
  });

  test('should renders skeleton structure correctly', () => {
    render(<SkeletonSearchResults />);

    const skeletons = screen.getAllByTestId('skeleton-item');

    skeletons.forEach((skeleton) => {
      expect(
        skeleton.querySelector('.react-loading-skeleton')
      ).toBeInTheDocument();
    });
  });
});
