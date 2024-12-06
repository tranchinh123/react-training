import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SkeletonDetailPage from './';

jest.mock('../SkeletonHeaderContent', () => () => (
  <div data-testid="skeleton-header">Header Skeleton</div>
));
jest.mock('../SkeletonInfoContent', () => () => (
  <div data-testid="skeleton-info">Info Skeleton</div>
));
jest.mock('../SkeletonMainContent', () => () => (
  <div data-testid="skeleton-main">Main Skeleton</div>
));

describe('SkeletonDetailPage', () => {
  test('matches snapshots', () => {
    const { container } = render(<SkeletonDetailPage />);
    expect(container).toMatchSnapshot();
  });

  test('should renders all skeleton components', () => {
    render(<SkeletonDetailPage />);

    expect(screen.getByTestId('skeleton-header')).toBeInTheDocument();
    expect(screen.getByTestId('skeleton-info')).toBeInTheDocument();
    expect(screen.getByTestId('skeleton-main')).toBeInTheDocument();
  });
});
