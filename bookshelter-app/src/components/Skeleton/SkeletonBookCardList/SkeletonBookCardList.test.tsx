import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SkeletonBookCardList from '.';

describe('SkeletonBookCardList ', () => {
  test('matches snapshots', () => {
    const { container } = render(<SkeletonBookCardList cards={6} />);
    expect(container).toMatchSnapshot();
  });

  test('renders the correct number of skeleton items', () => {
    render(<SkeletonBookCardList cards={6} />);

    const skeletonItem = screen.getAllByTestId('skeleton-item');

    expect(skeletonItem.length).toBe(6);
  });

  test('renders skeleton structure correctly', () => {
    render(<SkeletonBookCardList cards={6} />);

    const skeletons = screen.getAllByTestId('skeleton-item');

    skeletons.forEach((skeleton) => {
      expect(
        skeleton.querySelector('.react-loading-skeleton')
      ).toBeInTheDocument();
    });
  });
});
