import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SkeletonBookCategoryList from '.';

describe('SkeletonBookCategoryList', () => {
  test('matches snapshots', () => {
    const { container } = render(<SkeletonBookCategoryList bookCategory={6} />);
    expect(container).toMatchSnapshot();
  });

  test('should render the correct number of skeleton items', () => {
    render(<SkeletonBookCategoryList bookCategory={6} />);

    const skeletonItems = screen.getAllByTestId('skeleton-item');

    expect(skeletonItems.length).toBe(6);
  });

  test('should renders skeleton structure correctly', () => {
    render(<SkeletonBookCategoryList bookCategory={6} />);

    const skeletons = screen.getAllByTestId('skeleton-item');

    skeletons.forEach((skeleton) => {
      expect(
        skeleton.querySelector('.react-loading-skeleton')
      ).toBeInTheDocument();
    });
  });
});
